'use strict';

var util = require('util');
var Super = require('./Error');

var $ = function ArgumentError(message) {
  Super.call(this, message);
};
util.inherits($, Super);

module.exports = $;
