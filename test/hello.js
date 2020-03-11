'use strict';
var expect = require('chai').expect;
const HelloJS = require('../hello.js');
const testingEnabled = HelloJS.testing;
var celebNames = HelloJS.testQuestion1A;
var counter = 0;
if(testingEnabled === true)
{
	describe('hello.js exists', function()  {
	  it('should exist', function() {
	      expect(HelloJS).to.not.be.undefined;
	  });
	});

	describe('Question 1A - Array created with the celebrities names', function()	{
		it('Names array should contain Flash, Anne, Chelsee, Corrie, Des and Zed', function()	{
			var question1a = ["Flash", "Anne", "Chelsee", "Corrie", "Des", "Zed"];
			var words = ['Foo','Bar','Fizz','Buzz'].map(v => v.toLowerCase());
			console.log(words);
			var questionScore = 0;
			if(expect(celebNames).to.eql(question1a)){questionScore=2;}
			else{questionScore = 0;}
			expect(celebNames).to.eql(question1a)
			console.log("You got " + questionScore + " point(s) for this question");
			counter = counter + questionScore;
			console.log("Your score is currently: " + counter);

		});
	});

	describe('Question 1B', function()	{
		it('An array should be created storing the number of beetles', function()	{

		});
	});
}
