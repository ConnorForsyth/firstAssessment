'use strict';
var expect = require('chai').expect;
const HelloJS = require('../hello.js');
var celebNames = HelloJS.testQuestion1A;

describe('hello.js exists', function()  {
  it('should exist', function() {
      expect(HelloJS).to.not.be.undefined;
  });
});

describe('Question 1A - Array created with the celebrities names', function()	{
	it('Names array should contain Flash, Anne, Chelsee, Corrie, Des and Zed', function()	{
		var question1a = ["Flash", "Anne", "Chelsee", "Corrie", "Des", "Zed"];
		expect(celebNames).to.eql(question1a);
		expect(celebNames, 'Please make sure that your array contains all the required names').to.eql(question1a);
	});
});

describe('Question 1B', function()	{
	it('An array should be created storing the number of beetles', function()	{
		
	});
});
