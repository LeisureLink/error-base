'use strict';

var util = require('util');
var Super = require('./AuthorizationError');

var $ = function ForbiddenError(message) {
  Super.call(this, message);
};
util.inherits($, Super);

module.exports = $;
