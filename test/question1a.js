'use strict';
var expect = require('chai').expect;
const HelloJS = require('../hello.js');
const testingEnabled = HelloJS.question1aTest;
var celebNames = HelloJS.testQuestion1A;
if(testingEnabled === true)
{
	describe('hello.js exists', function()  {
	  it('should exist', function() {
	      expect(HelloJS).to.not.be.undefined;
	  });
	});

	describe('Question 1A - Array created with the celebrities names', function()	{
		it('Names array should contain Flash, Anne, Chelsee, Corrie, Des and Zed', function()	{
			var question1a = ["Flash", "Anne", "Chelsee", "Corrie", "Des", "Zed"].map(v => v.toLowerCase());
			celebNames = celebNames.map(v => v.toLowerCase());
			var questionScore = 0;
			if(expect(celebNames).to.eql(question1a)){questionScore=2;}
			else{questionScore = 0;}
			expect(celebNames).to.eql(question1a)
			console.log("You got " + questionScore + " point(s) for this question");
		});
	});
}
