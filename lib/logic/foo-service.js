/**
 * foo.js
 */

'use strict';

var isError = false;

function doThing(callback) {
  callback(isError ? "error" : undefined, 5);
}

function foo(callback) {
  doThing(function(err, res) {
    if (err) {
      callback(err);
    } else {
      callback(undefined, res);
    }
  });
}

// for testing purposes
function error(val) {
  isError = val;
}

module.exports = {
  foo: foo,
  error: error
};
