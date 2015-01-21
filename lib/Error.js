module.exports = (function() {
  'use strict';

  var util = require('util');
  var Super = Error;

  // Specialized Error class that conveys the specified message
  // and the final class' name.
  var $ = function Error(message) {
    Super.call(this, message);
    this.name = this.constructor.name;
    this.message = message;
  };
  util.inherits($, Super);

  return $;
})();
