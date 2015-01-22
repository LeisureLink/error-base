module.exports = (function() {
  'use strict';

  var util = require('util');
  var Error = require('./Error');

  var $ = function ArgumentError(message) {
    Error.call(this, message);
  };
  util.inherits($, Error);

  return $;
})();
