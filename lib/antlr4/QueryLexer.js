// Generated from antlr4/Query.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u00064\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003\u0015",
    "\n\u0003\r\u0003\u000e\u0003\u0016\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0007\u0004\u001c\n\u0004\f\u0004\u000e\u0004\u001f\u000b\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005&",
    "\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0006\b1\n\b\r\b\u000e",
    "\b2\u0002\u0002\t\u0003\u0003\u0005\u0004\u0007\u0005\t\u0002\u000b",
    "\u0002\r\u0002\u000f\u0006\u0003\u0002\u0007\u0007\u0002\u000b\f\u000f",
    "\u000f\"\"$$<<\u0004\u0002$$^^\n\u0002$$11^^ddhhppttvv\u0005\u00022",
    ";CHch\u0005\u0002\u000b\f\u000f\u000f\"\"5\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0003\u0011\u0003\u0002\u0002",
    "\u0002\u0005\u0014\u0003\u0002\u0002\u0002\u0007\u0018\u0003\u0002\u0002",
    "\u0002\t\"\u0003\u0002\u0002\u0002\u000b\'\u0003\u0002\u0002\u0002\r",
    "-\u0003\u0002\u0002\u0002\u000f0\u0003\u0002\u0002\u0002\u0011\u0012",
    "\u0007<\u0002\u0002\u0012\u0004\u0003\u0002\u0002\u0002\u0013\u0015",
    "\n\u0002\u0002\u0002\u0014\u0013\u0003\u0002\u0002\u0002\u0015\u0016",
    "\u0003\u0002\u0002\u0002\u0016\u0014\u0003\u0002\u0002\u0002\u0016\u0017",
    "\u0003\u0002\u0002\u0002\u0017\u0006\u0003\u0002\u0002\u0002\u0018\u001d",
    "\u0007$\u0002\u0002\u0019\u001c\u0005\t\u0005\u0002\u001a\u001c\n\u0003",
    "\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001a\u0003\u0002",
    "\u0002\u0002\u001c\u001f\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002",
    "\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e \u0003\u0002",
    "\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002 !\u0007$\u0002\u0002",
    "!\b\u0003\u0002\u0002\u0002\"%\u0007^\u0002\u0002#&\t\u0004\u0002\u0002",
    "$&\u0005\u000b\u0006\u0002%#\u0003\u0002\u0002\u0002%$\u0003\u0002\u0002",
    "\u0002&\n\u0003\u0002\u0002\u0002\'(\u0007w\u0002\u0002()\u0005\r\u0007",
    "\u0002)*\u0005\r\u0007\u0002*+\u0005\r\u0007\u0002+,\u0005\r\u0007\u0002",
    ",\f\u0003\u0002\u0002\u0002-.\t\u0005\u0002\u0002.\u000e\u0003\u0002",
    "\u0002\u0002/1\t\u0006\u0002\u00020/\u0003\u0002\u0002\u000212\u0003",
    "\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u0002",
    "3\u0010\u0003\u0002\u0002\u0002\b\u0002\u0016\u001b\u001d%2\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function QueryLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

QueryLexer.prototype = Object.create(antlr4.Lexer.prototype);
QueryLexer.prototype.constructor = QueryLexer;

QueryLexer.EOF = antlr4.Token.EOF;
QueryLexer.T__0 = 1;
QueryLexer.SYMBOL = 2;
QueryLexer.STRING = 3;
QueryLexer.WS = 4;


QueryLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

QueryLexer.prototype.literalNames = [ null, "':'" ];

QueryLexer.prototype.symbolicNames = [ null, null, "SYMBOL", "STRING", "WS" ];

QueryLexer.prototype.ruleNames = [ "T__0", "SYMBOL", "STRING", "ESC", "UNICODE", 
                                   "HEX", "WS" ];

QueryLexer.prototype.grammarFileName = "Query.g4";



exports.QueryLexer = QueryLexer;

