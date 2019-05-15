const assert = require('assert');

const {
    getCommandParams,
} = require('../src/core');

const {
    PARAM_NAMES,
} = require('../src/config');


describe('core', function () {
    describe('getCommandParams', function () {
        it('should create object with null params', function (done) {
            const params = getCommandParams();

            assert.deepEqual(params, {
                dir: null,
                template: null,
                vars: null,
            });

            done();
        });

        it('should create object of params', function (done) {
            const args = {
                dir: 'value',
                template: 'value',
                vars: 'value',
            };

            const params = getCommandParams(args, PARAM_NAMES);

            assert.deepEqual(params, {
                dir: 'value',
                template: 'value',
                vars: 'value',
            });

            done();
        });

        it('should create object of aliases', function (done) {
            const args = {
                d: 'value',
                t: 'value',
                v: 'value',
            };

            const params = getCommandParams(args, PARAM_NAMES);

            assert.deepEqual(params, {
                dir: 'value',
                template: 'value',
                vars: 'value',
            });

            done();
        });
    });
});
