'use strict';

const expect = require('chai').expect;

describe('remoteMathService', function() {

  var service;

  before(function() {
    service = require('../lib/logic/remote-math-service.js');
  });

  it('should add values', function(done) {
    service.remoteMathService(function(err, answer) {
      if (err) {
        throw err;
      }
      expect(answer).to.equal(3);
      done();
    });
  });
});
