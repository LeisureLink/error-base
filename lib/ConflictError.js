module.exports = (function() {
  'use strict';

  var util = require('util');
  var Error = require('./Error');

  var $ = function ConflictError(message) {
    Error.call(this, message);
  };
  util.inherits($, Error);

  return $;
})();
