// Generated from antlr4/Query.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var QueryListener = require('./QueryListener').QueryListener;
var grammarFileName = "Query.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0006!\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0003\u0002\u0005\u0002\n\n\u0002\u0003\u0002\u0003\u0002\u0005",
    "\u0002\u000e\n\u0002\u0003\u0002\u0005\u0002\u0011\n\u0002\u0007\u0002",
    "\u0013\n\u0002\f\u0002\u000e\u0002\u0016\u000b\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u001d\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0002\u0004\u0006",
    "\u0002\u0003\u0003\u0002\u0003\u0005\"\u0002\t\u0003\u0002\u0002\u0002",
    "\u0004\u001c\u0003\u0002\u0002\u0002\u0006\u001e\u0003\u0002\u0002\u0002",
    "\b\n\u0007\u0006\u0002\u0002\t\b\u0003\u0002\u0002\u0002\t\n\u0003\u0002",
    "\u0002\u0002\n\u0014\u0003\u0002\u0002\u0002\u000b\u000e\u0005\u0004",
    "\u0003\u0002\f\u000e\u0005\u0006\u0004\u0002\r\u000b\u0003\u0002\u0002",
    "\u0002\r\f\u0003\u0002\u0002\u0002\u000e\u0010\u0003\u0002\u0002\u0002",
    "\u000f\u0011\u0007\u0006\u0002\u0002\u0010\u000f\u0003\u0002\u0002\u0002",
    "\u0010\u0011\u0003\u0002\u0002\u0002\u0011\u0013\u0003\u0002\u0002\u0002",
    "\u0012\r\u0003\u0002\u0002\u0002\u0013\u0016\u0003\u0002\u0002\u0002",
    "\u0014\u0012\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002",
    "\u0015\u0003\u0003\u0002\u0002\u0002\u0016\u0014\u0003\u0002\u0002\u0002",
    "\u0017\u0018\u0007\u0004\u0002\u0002\u0018\u0019\u0007\u0003\u0002\u0002",
    "\u0019\u001d\u0005\u0006\u0004\u0002\u001a\u001b\u0007\u0004\u0002\u0002",
    "\u001b\u001d\u0007\u0003\u0002\u0002\u001c\u0017\u0003\u0002\u0002\u0002",
    "\u001c\u001a\u0003\u0002\u0002\u0002\u001d\u0005\u0003\u0002\u0002\u0002",
    "\u001e\u001f\t\u0002\u0002\u0002\u001f\u0007\u0003\u0002\u0002\u0002",
    "\u0007\t\r\u0010\u0014\u001c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'" ];

var symbolicNames = [ null, null, "SYMBOL", "STRING", "WS" ];

var ruleNames =  [ "query", "pair", "single" ];

function QueryParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

QueryParser.prototype = Object.create(antlr4.Parser.prototype);
QueryParser.prototype.constructor = QueryParser;

Object.defineProperty(QueryParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

QueryParser.EOF = antlr4.Token.EOF;
QueryParser.T__0 = 1;
QueryParser.SYMBOL = 2;
QueryParser.STRING = 3;
QueryParser.WS = 4;

QueryParser.RULE_query = 0;
QueryParser.RULE_pair = 1;
QueryParser.RULE_single = 2;

function QueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_query;
    return this;
}

QueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryContext.prototype.constructor = QueryContext;

QueryContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QueryParser.WS);
    } else {
        return this.getToken(QueryParser.WS, i);
    }
};


QueryContext.prototype.pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PairContext);
    } else {
        return this.getTypedRuleContext(PairContext,i);
    }
};

QueryContext.prototype.single = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleContext);
    } else {
        return this.getTypedRuleContext(SingleContext,i);
    }
};

QueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterQuery(this);
	}
};

QueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitQuery(this);
	}
};




QueryParser.QueryContext = QueryContext;

QueryParser.prototype.query = function() {

    var localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, QueryParser.RULE_query);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 7;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===QueryParser.WS) {
            this.state = 6;
            this.match(QueryParser.WS);
        }

        this.state = 18;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QueryParser.T__0) | (1 << QueryParser.SYMBOL) | (1 << QueryParser.STRING))) !== 0)) {
            this.state = 11;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
            switch(la_) {
            case 1:
                this.state = 9;
                this.pair();
                break;

            case 2:
                this.state = 10;
                this.single();
                break;

            }
            this.state = 14;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===QueryParser.WS) {
                this.state = 13;
                this.match(QueryParser.WS);
            }

            this.state = 20;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_pair;
    return this;
}

PairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PairContext.prototype.constructor = PairContext;

PairContext.prototype.SYMBOL = function() {
    return this.getToken(QueryParser.SYMBOL, 0);
};

PairContext.prototype.single = function() {
    return this.getTypedRuleContext(SingleContext,0);
};

PairContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterPair(this);
	}
};

PairContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitPair(this);
	}
};




QueryParser.PairContext = PairContext;

QueryParser.prototype.pair = function() {

    var localctx = new PairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, QueryParser.RULE_pair);
    try {
        this.state = 26;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 21;
            this.match(QueryParser.SYMBOL);
            this.state = 22;
            this.match(QueryParser.T__0);
            this.state = 23;
            this.single();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 24;
            this.match(QueryParser.SYMBOL);
            this.state = 25;
            this.match(QueryParser.T__0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SingleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_single;
    return this;
}

SingleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleContext.prototype.constructor = SingleContext;

SingleContext.prototype.SYMBOL = function() {
    return this.getToken(QueryParser.SYMBOL, 0);
};

SingleContext.prototype.STRING = function() {
    return this.getToken(QueryParser.STRING, 0);
};

SingleContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterSingle(this);
	}
};

SingleContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitSingle(this);
	}
};




QueryParser.SingleContext = SingleContext;

QueryParser.prototype.single = function() {

    var localctx = new SingleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, QueryParser.RULE_single);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QueryParser.T__0) | (1 << QueryParser.SYMBOL) | (1 << QueryParser.STRING))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.QueryParser = QueryParser;
