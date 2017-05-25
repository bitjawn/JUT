// const assert = require('assert');
const assert = require('chai').assert;
const app = require('../app');
const chalk = require('chalk');

describe('App', function(){
	describe('say method', function(){
		it(chalk.cyan('app should return hello'), function(){
			let result = app.say();
			assert.equal(result, 'hello');
		});

		it(chalk.cyan('say should return type string'), function(){
			let result = app.say();
			assert.typeOf(result, 'string')
		});
	});

	describe('addNumbers method', function(){
		it(chalk.cyan('result should return 5'), function(){
			let result = app.addNumbers(3,2);
			assert.equal(result, 5);
		});

		it(chalk.cyan('addNumbers should return a non-negative number'), function(){
			let result = app.addNumbers(4,23);
			assert.typeOf(result, 'number');
			assert.isAbove(result, -1);
		});
	});
});
