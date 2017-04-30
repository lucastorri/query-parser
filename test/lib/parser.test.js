import {test} from 'ava';
import {parse, ParserError} from '../../lib/parser';

test('parses empty strings', t => {
	t.deepEqual(parse(''), []);
	t.deepEqual(parse('  '), []);
});

test('parses single tokens', t => {
	t.deepEqual(parse('hi'), [{value: 'hi'}]);
});

test('parses quoted single tokens', t => {
	t.deepEqual(parse('"hello world"'), [{value: 'hello world'}]);
});

test('parses pairs', t => {
	t.deepEqual(parse('message:hi'), [{key: 'message', value: 'hi'}]);
});

test('parses pairs with quoted values', t => {
	t.deepEqual(parse('message:"hello world"'), [{key: 'message', value: 'hello world'}]);
});

test('parses multiple combinations', t => {
	const input = String.raw`oi hi:123 hey:"how are you?" loose: "lost \n in the sea" colon:: "quoted:all"`;

	t.deepEqual(parse(input), [
    {value: 'oi'},
    {key: 'hi', value: '123'},
    {key: 'hey', value: 'how are you?'},
    {key: 'loose', value: ''},
    {value: 'lost \n in the sea'},
    {key: 'colon', value: ':'},
    {value: 'quoted:all'}
	]);
});

test('fails on invalid inputs', t => {
	t.throws(() => parse('unmatched quote "'), ParserError);
});
