const antlr4 = require('antlr4');
const antlr4Error = require('antlr4/error');

const QueryLexer = require('./antlr4/QueryLexer').QueryLexer;
const QueryParser = require('./antlr4/QueryParser').QueryParser;
const QueryListener = require('./antlr4/QueryListener').QueryListener;


class CollectQueryListener extends QueryListener {

  constructor () {
    super();
    this.tokens = [];
  }

  enterPair (ctx) {
    let key = ctx.SYMBOL().getText();
    let value = this._extractValue(ctx.single())

    this.tokens.push({ key, value });
  }

  enterSingle (ctx) {
    if (ctx.parentCtx instanceof QueryParser.PairContext) return;

    let value = this._extractValue(ctx);

    this.tokens.push({ value });
  }

  _extractValue (valueCtx) {
    return valueCtx
      ? valueCtx.STRING() ? JSON.parse(valueCtx.getText()) : valueCtx.getText()
      : '';
  }

}

class FailingErrorListener extends antlr4Error.ErrorListener {

  constructor () {
    super();
  }

  syntaxError (recognizer, offendingSymbol, line, column, msg, e) {
    throw new ParserError(`Invalid syntax: ${msg}`, e);
  }

}

class ParserError extends Error {

  constructor(message, cause) {
    super(message, cause.stack);
    this.cause = cause;
  }

}

exports.ParserError = ParserError;

exports.parse = (input) => {
  let chars = new antlr4.InputStream(input);
  let lexer = new QueryLexer(chars);
  let tokens  = new antlr4.CommonTokenStream(lexer)
  let parser = new QueryParser(tokens);

  lexer.removeErrorListeners()
  lexer.addErrorListener(new FailingErrorListener())
  parser.buildParseTrees = true;

  let tree = parser.query();
  let listener = new CollectQueryListener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

  return listener.tokens;
}
