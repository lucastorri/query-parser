// Generated from antlr4/Query.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by QueryParser.
function QueryListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

QueryListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
QueryListener.prototype.constructor = QueryListener;

// Enter a parse tree produced by QueryParser#query.
QueryListener.prototype.enterQuery = function(ctx) {
};

// Exit a parse tree produced by QueryParser#query.
QueryListener.prototype.exitQuery = function(ctx) {
};


// Enter a parse tree produced by QueryParser#pair.
QueryListener.prototype.enterPair = function(ctx) {
};

// Exit a parse tree produced by QueryParser#pair.
QueryListener.prototype.exitPair = function(ctx) {
};


// Enter a parse tree produced by QueryParser#single.
QueryListener.prototype.enterSingle = function(ctx) {
};

// Exit a parse tree produced by QueryParser#single.
QueryListener.prototype.exitSingle = function(ctx) {
};



exports.QueryListener = QueryListener;