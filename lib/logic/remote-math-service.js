/**
 * remote-math-service.js
 */

'use strict';

// https://www.npmjs.com/package/promise
var Promise = require('promise/domains');

function callOneService(cb) {
  setTimeout(function() {
    return cb(undefined, 1);
  }, 1000);
}

function callTwoService(cb) {
  setTimeout(function() {
    return cb(undefined, 2);
  }, 1500);
}

/**
 * @param {function} cb - the callback which will be notified with result
 * @return {void}
 */
function remoteMathService(cb) {
  var one, two;
  var promises = [];

  promises.push(new Promise(function(resolve) {
    callOneService(function(err, num) {
      resolve(one = num);
    });
  }));

  promises.push(new Promise(function(resolve) {
    callTwoService(function(err, num) {
      resolve(two = num);
    });
  }));

  Promise.all(promises).then(function() {
    cb(undefined, one + two);
  });
}

module.exports = {
  remoteMathService: remoteMathService
};
