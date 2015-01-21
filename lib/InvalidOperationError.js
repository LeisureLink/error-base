module.exports = (function() {
  'use strict';

  var util = require('util');
  var Error = require('./Error');

  var $ = function InvalidOperationError(message) {
    Error.call(this, message);
  };
  util.inherits($, Error);

  return $;
})();
