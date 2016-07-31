/**
 * app-2.js
 *
 * Solution of Q2. Run: node app-2.js
 */

'use strict';

const service = require('./lib/logic/foo-service.js');

service.foo(function(err, res) {
  console.log('Done!. err=', err, ' : res = ', res);
});
