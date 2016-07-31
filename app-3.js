/**
 * app-3.js
 *
 * Solution of Q3. Run: node app-3.js
 */

'use strict';

// This is a mock database implementation with just a connect function
// db.connect will need to be called a total of 10 times before it successfully connects
var counter = 0;
var db = {
  connect: function(cb) {
    console.log('connection attempt', counter + 1);
    if (counter < 9) {
      counter++;
      return cb('db not ready yet');
    }
    return cb();
  }
};

/**
 * Solution:
 */

const timeout = 2000;

// encapsulate the db.connect with callback
function connect() {
  db.connect(handleConnection);
}

// wait for the timeout and try to connect again
function retry() {
  console.log('waiting ' + timeout + ' for new connection attempt');
  setTimeout(function() { connect(); }, timeout);
}

function handleConnection(err) {
  if (err) {
    console.error(err);
    retry();
  } else {
    console.log('successfully connected');
  }
}
// connect to DB
connect();
