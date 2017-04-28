let parse = require('./lib/parser').parse;

let input = String.raw`oi hi:123 hey:"how are you?" loose: "lost \n in the sea" colon::`

//TODO read from stdin or args, print result
//TODO if it has invalid syntax, print where it is wrong
console.log(parse(input));
