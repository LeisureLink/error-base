'use strict';

var util = require('util');
var Super = require('./Error');

var $ = function UnprocessableEntityError(message) {
  Super.call(this, message);
};
util.inherits($, Super);

module.exports = $;
