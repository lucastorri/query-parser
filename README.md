# Query Parser

An [antlr4](http://www.antlr.org/)-based parser for a query syntax similar to [Github's advanced search](https://help.github.com/articles/search-syntax/).

When running `index.js`, input can be passed in the following ways:

- arguments
- `stdin`
- file, with `-i`

For instance:

```bash
./index.js 'key:value'

echo 'key:value' | ./index.js

./index.js -i <(echo 'key:value')
```

## Syntax

Keys and values are separated by `:`. Keys cannot have spaces or be quoted. Values can either follow the same formats as keys, or be quoted and be JSON strings.

For example, the following file:

```
hi
"hi there"
hello:world
hello:"brave new world"
```

Will produce this output:

```
┌───────┬─────────────────┐
│ Key   │ Value           │
├───────┼─────────────────┤
│       │ hi              │
├───────┼─────────────────┤
│       │ hi there        │
├───────┼─────────────────┤
│ hello │ world           │
├───────┼─────────────────┤
│ hello │ brave new world │
└───────┴─────────────────┘
```

## Test

```bash
npm test
```

## Generate Grammar Code

```bash
antlr4 -Dlanguage=JavaScript -o lib antlr4/Query.g4
```
