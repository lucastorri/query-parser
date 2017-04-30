const cli = require('cli');
const Table = require('cli-table2');
const chalk = require('chalk');

let parser = require('./lib/parser');


let run = (input) => {
  try {
    handleInput(input);
  } catch (error) {
    handleError(error);
  }
};

let handleInput = (input) => {
  var table = new Table({
    head: [chalk.reset(chalk.bold('Key')), chalk.reset(chalk.bold('Value'))]
  });

  parser.parse(input).forEach((obj) => {
    table.push([chalk.cyan(obj.key || ''), chalk.green(obj.value || '')]);
  });

  console.log(table.toString());
};

let handleError = (error) => {
  if (error instanceof parser.ParserError) {
    console.error(error.message);
    let input = error.cause.input.strdata;
    let index = error.cause.startIndex;

    let markedInput = [
      input.slice(0, index),
      chalk.red(input.slice(index, index + 1)),
      input.slice(index + 1)
    ].join('');

    console.error(markedInput);
  } else {
    console.error(error);
  }
  process.exit(1);
};

cli.parse({
  input: ['i', 'Read from FILE rather than the stdin', 'file']
});

cli.main(function(args, options) {
  if (args.length > 0) {
    run(args.join(' '));
  } else {
    let lines = [];
    this.withInput(options.input || 'stdin', (line, _, eof) => {
      eof ? run(lines.join(' ')) : lines.push(line);
    });
  }
});
