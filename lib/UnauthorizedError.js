module.exports = (function() {
  'use strict';

  var util = require('util');
  var Error = require('./Error');

  var $ = function UnauthorizedError(message) {
    Error.call(this, message);
  };
  util.inherits($, Error);

  return $;
})();
