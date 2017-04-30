#!/usr/bin/env node

const cli = require('cli');
const Table = require('cli-table2');
const chalk = require('chalk');

const parser = require('./lib/parser');

const handleInput = input => {
	const table = new Table({
		head: [chalk.reset(chalk.bold('Key')), chalk.reset(chalk.bold('Value'))]
	});

	parser.parse(input).forEach(obj => {
		table.push([chalk.cyan(obj.key || ''), chalk.green(obj.value || '')]);
	});

	console.log(table.toString());
};

const handleError = error => {
	if (error instanceof parser.ParserError) {
		console.error(error.message);
		const input = error.cause.input.strdata;
		const index = error.cause.startIndex;

		const markedInput = [
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

const run = input => {
	try {
		handleInput(input);
	} catch (err) {
		handleError(err);
	}
};

cli.parse({
	input: ['i', 'Read from FILE rather than the stdin', 'file']
});

cli.main(function (args, options) {
	if (args.length > 0) {
		run(args.join(' '));
	} else {
		const lines = [];
		this.withInput(options.input || 'stdin', (line, _, eof) => {
			if (eof) {
				run(lines.join(' '));
			} else {
				lines.push(line);
			}
		});
	}
});
