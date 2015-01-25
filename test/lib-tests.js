(function() {
  'use strict';

  var util = require('util'),
    format = util.format,
    uuid = require('node-uuid'),
    expect = require('expect.js'),
    errors = require('../');

  function print(it) {
    util.log(util.inspect(it, false, 9));
  }

  describe('errors', function() {

    describe('NotFoundError', function() {
      var type = 'NotFoundError';
      var msg = format('this is error: %s', uuid.v4());
      var err = new errors[type](msg);

      it('is an instanceof Error', function() {
        expect(err).to.be.an(Error);
      });

      it('conveys error message specified in constructor', function() {
        expect(err.message).to.be(msg);
      });

      it('identifies the Error type when converted to a string', function() {
        expect(err.toString()).to.be(format('%s: %s', type, msg));
      });

    });

    describe('ConflictError', function() {
      var type = 'ConflictError';
      var msg = format('this is error: %s', uuid.v4());
      var err = new errors[type](msg);

      it('is an instanceof Error', function() {
        expect(err).to.be.an(Error);
      });

      it('conveys error message specified in constructor', function() {
        expect(err.message).to.be(msg);
      });

      it('identifies the Error type when converted to a string', function() {
        expect(err.toString()).to.be(format('%s: %s', type, msg));
      });

    });

    describe('ArgumentError', function() {
      var type = 'ArgumentError';
      var msg = format('this is error: %s', uuid.v4());
      var err = new errors[type](msg);

      it('is an instanceof Error', function() {
        expect(err).to.be.an(Error);
      });

      it('conveys error message specified in constructor', function() {
        expect(err.message).to.be(msg);
      });

      it('identifies the Error type when converted to a string', function() {
        expect(err.toString()).to.be(format('%s: %s', type, msg));
      });

    });

    describe('ServiceUnavailableError', function() {
      var type = 'ServiceUnavailableError';
      var msg = format('this is error: %s', uuid.v4());
      var err = new errors[type](msg);

      it('is an instanceof Error', function() {
        expect(err).to.be.an(Error);
      });

      it('conveys error message specified in constructor', function() {
        expect(err.message).to.be(msg);
      });

      it('identifies the Error type when converted to a string', function() {
        expect(err.toString()).to.be(format('%s: %s', type, msg));
      });

    });

    describe('AuthorizationError', function() {
      var type = 'AuthorizationError';
      var msg = format('this is error: %s', uuid.v4());
      var err = new errors[type](msg);

      it('is an instanceof Error', function() {
        expect(err).to.be.an(Error);
      });

      it('conveys error message specified in constructor', function() {
        expect(err.message).to.be(msg);
      });

      it('identifies the Error type when converted to a string', function() {
        expect(err.toString()).to.be(format('%s: %s', type, msg));
      });

    });

    describe('InvalidOperationError', function() {
      var type = 'InvalidOperationError';
      var msg = format('this is error: %s', uuid.v4());
      var err = new errors[type](msg);

      it('is an instanceof Error', function() {
        expect(err).to.be.an(Error);
      });

      it('conveys error message specified in constructor', function() {
        expect(err.message).to.be(msg);
      });

      it('identifies the Error type when converted to a string', function() {
        expect(err.toString()).to.be(format('%s: %s', type, msg));
      });

    });

    describe('NotImplementedError', function() {
      var type = 'NotImplementedError';
      var msg = format('this is error: %s', uuid.v4());
      var err = new errors[type](msg);

      it('is an instanceof Error', function() {
        expect(err).to.be.an(Error);
      });

      it('conveys error message specified in constructor', function() {
        expect(err.message).to.be(msg);
      });

      it('identifies the Error type when converted to a string', function() {
        expect(err.toString()).to.be(format('%s: %s', type, msg));
      });

    });

    describe('UnprocessableEntityError', function() {
      var type = 'UnprocessableEntityError';
      var msg = format('this is error: %s', uuid.v4());
      var err = new errors[type](msg);

      it('is an instanceof Error', function() {
        expect(err).to.be.an(Error);
      });

      it('conveys error message specified in constructor', function() {
        expect(err.message).to.be(msg);
      });

      it('identifies the Error type when converted to a string', function() {
        expect(err.toString()).to.be(format('%s: %s', type, msg));
      });

    });

    describe('UnauthorizedError', function() {
      var type = 'UnauthorizedError';
      var msg = format('this is error: %s', uuid.v4());
      var err = new errors[type](msg);

      it('is an instanceof Error', function() {
        expect(err).to.be.an(Error);
      });

      it('is an instanceof AuthorizationError', function() {
        expect(err).to.be.an(errors.AuthorizationError);
      });

      it('conveys error message specified in constructor', function() {
        expect(err.message).to.be(msg);
      });

      it('identifies the Error type when converted to a string', function() {
        expect(err.toString()).to.be(format('%s: %s', type, msg));
      });
    });


    describe('ForbiddenError', function() {
      var type = 'ForbiddenError';
      var msg = format('this is error: %s', uuid.v4());
      var err = new errors[type](msg);

      it('is an instanceof Error', function() {
        expect(err).to.be.an(Error);
      });

      it('is an instanceof AuthorizationError', function() {
        expect(err).to.be.an(errors.AuthorizationError);
      });

      it('conveys error message specified in constructor', function() {
        expect(err.message).to.be(msg);
      });

      it('identifies the Error type when converted to a string', function() {
        expect(err.toString()).to.be(format('%s: %s', type, msg));
      });
    });

    describe('InauthenticError', function() {
      var type = 'InauthenticError';
      var msg = format('this is error: %s', uuid.v4());
      var err = new errors[type](msg);

      it('is an instanceof Error', function() {
        expect(err).to.be.an(Error);
      });

      it('conveys error message specified in constructor', function() {
        expect(err.message).to.be(msg);
      });

      it('identifies the Error type when converted to a string', function() {
        expect(err.toString()).to.be(format('%s: %s', type, msg));
      });
    });

  });

})();
