grammar Query;

query: WS? ((pair | single) WS?)* ;

pair
    : SYMBOL ':' single
    | SYMBOL ':'
    ;

single:
    (':' | SYMBOL | STRING)
    ;

SYMBOL
    : ~[:" \t\n\r]+
    ;

STRING
   : '"' (ESC | ~["\\])* '"'
   ;
fragment ESC
   : '\\' (["\\/bfnrt] | UNICODE)
   ;
fragment UNICODE
   : 'u' HEX HEX HEX HEX
   ;
fragment HEX
   : [0-9a-fA-F]
   ;

WS
   : [ \t\n\r]+
   ;




// rm -f *.java *.class && antlr4 Query.g4 && javac -cp /usr/local/Cellar/antlr/4.6/antlr-4.6-complete.jar *.java && grun Query query -gui
// oi hi:123 hey:"how are you?" loose: "lost"
// ^D
