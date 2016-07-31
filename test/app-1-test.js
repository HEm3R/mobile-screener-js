'use strict';

const expect = require('chai').expect;

describe('fooService', function() {

  var service;

  before(function() {
    service = require('../lib/logic/foo-service.js');
  });

  it('result should be 5', function(done) {
    service.error(false);
    service.foo(function(err, result) {
      expect(err).undefined;
      expect(result).to.equal(5);
      done();
    });
  });

  it('error should be present', function(done) {
    service.error(true);
    service.foo(function(err, result) {
      expect(err).to.equal('error');
      expect(result).undefined;
      done();
    });
  });
});
