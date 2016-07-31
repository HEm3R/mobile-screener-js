/**
 * app-2.js
 *
 * Solution of Q2. Run: node app-2.js
 */

'use strict';

const service = require('./lib/logic/remote-math-service.js');

service.remoteMathService(function(err, answer) {
  if (err) {
    console.log('error ', err);
  }
  if (answer !== 3) {
    console.log('wrong answer ', answer);
  } else {
    console.log('correct');
  }
});
