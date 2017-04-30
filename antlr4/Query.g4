grammar Query;

query
    : WS? ((pair | single) WS?)*
    ;

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
