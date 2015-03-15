'use strict';

var util = require('util');

var $ = {};

function constructErrorClass(it) {
  if (Array.isArray(it)) {
    return eval(util.format([ // jshint ignore:line
      'function %s(message) {',
      '  $.%s.call(this, message);',
      '}',
      'util.inherits(%s, $.%s);',
      '$["%s"] = %s;'
    ].join('\n'), it[0], it[1], it[0], it[1], it[0], it[0]));
  }
  return eval(util.format([ // jshint ignore:line
    'function %s(message) {',
    '  Error.call(this);',
    '  Error.captureStackTrace(this, this.constructor);',

    '  this.name = this.constructor.name;',
    '  this.message = message;',
    '}',
    'util.inherits(%s, Error);',
    '$["%s"] = %s;'
  ].join('\n'), it, it, it, it));
}

['ArgumentError',
  'AuthorizationError',
  ['ForbiddenError', 'AuthorizationError'],
  ['InauthenticError', 'AuthorizationError'],
  ['UnauthorizedError', 'AuthorizationError'],
  'ConflictError',
  'InvalidOperationError',
  'NotFoundError',
  'NotImplementedError',
  'ServiceUnavailableError',
  'UnprocessableEntityError'
].forEach(function(it) {
  constructErrorClass(it);
});

$.isInstance = function isInstance(instance, clazz) {
  var ctor;
  if (instance instanceof Error &&
    typeof(instance) === 'object' &&
    typeof(clazz) === 'function') {
    ctor = instance.constructor;
    while (ctor) {
      if (ctor.name === clazz.name) {
        return true;
      }
      ctor = (ctor.super_) ? ctor.super_ : null;
    }
  }
  return false;
};

module.exports = $;
