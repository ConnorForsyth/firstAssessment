'use strict';
var expect = require('chai').expect;
var HelloJS = require('../hello.js');
describe('hello.js exists', function()  {
  it('should exist', function() {
      expect(HelloJS).to.not.be.undefined;
  });
});

describe('check variable', function()	{
	it('should return an array with 5 specific names', function()	{
		var expectedInput = ["Flash", "Anne", "Chelsee", "Corrie", "Des", "Zed"];
		var actual = HelloJS.question1A();
		
	});
});
