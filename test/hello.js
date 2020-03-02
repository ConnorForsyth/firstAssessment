'use strict';
var expect = require('chai').expect;

describe('hello.js exists', function()  {
  it('should exist', function() {
      var HelloJS = require('../hello.js');
      expect(HelloJS).to.not.be.undefined;
  });
});
