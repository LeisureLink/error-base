'use strict';

var util = require('util');
var Super = require('./Error');

var $ = function ServiceUnavailableError(message) {
  Super.call(this, message);
};
util.inherits($, Super);

module.exports = $;
