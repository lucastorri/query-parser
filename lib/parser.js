const antlr4 = require('antlr4');
const antlr4Error = require('antlr4/error');

const QueryLexer = require('./antlr4/QueryLexer').QueryLexer;
const QueryParser = require('./antlr4/QueryParser').QueryParser;
const QueryListener = require('./antlr4/QueryListener').QueryListener;

class CollectQueryListener extends QueryListener {

	constructor() {
		super();
		this.tokens = [];
	}

	enterPair(ctx) {
		const key = ctx.SYMBOL().getText(); // eslint-disable-line new-cap
		const value = this._extractValue(ctx.single());

		this.tokens.push({key, value});
	}

	enterSingle(ctx) {
		if (ctx.parentCtx instanceof QueryParser.PairContext) {
			return;
		}

		const value = this._extractValue(ctx);

		this.tokens.push({value});
	}

	_extractValue(valueCtx) {
		return valueCtx ?
      valueCtx.STRING() ? JSON.parse(valueCtx.getText()) : valueCtx.getText() : // eslint-disable-line new-cap
      '';
	}

}

class ParserError extends Error {

	constructor(message, cause) {
		super(message, cause.stack);
		this.name = 'ParserError';
		this.cause = cause;
	}

}

class FailingErrorListener extends antlr4Error.ErrorListener {

	syntaxError(recognizer, offendingSymbol, line, column, msg, e) { // eslint-disable-line max-params
		throw new ParserError(`Invalid syntax: ${msg}`, e);
	}

}

exports.ParserError = ParserError;

exports.parse = input => {
	const chars = new antlr4.InputStream(input);
	const lexer = new QueryLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new QueryParser(tokens);

	lexer.removeErrorListeners();
	lexer.addErrorListener(new FailingErrorListener());
	parser.buildParseTrees = true;

	const tree = parser.query();
	const listener = new CollectQueryListener();
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

	return listener.tokens;
};
