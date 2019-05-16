const assert = require('assert');

const {
    getCommandParams,
    readFile,
} = require('../src/core');


describe('core', () => {
    describe('readFile', () => {
        let content = "";

        before((done) => {
            readFile(require.resolve('./test.txt'))
                .then((cont) => {
                    content = cont;
                })
                .catch((error) => {
                    content = error;
                })
                .finally(done)
        });

        it('should load test.txt', (done) => {
            assert.equal(content, 'OK');

            done()
        })
    });

    describe('getCommandParams', () => {
        it('should create object with null params', (done) => {
            const params = getCommandParams();

            assert.deepEqual(params, {
                dir: null,
                template: null,
                vars: null,
            });

            done();
        });

        it('should create object of params', (done) => {
            const args = {
                dir: 'value',
                template: 'value',
                vars: 'value',
            };

            const params = getCommandParams(args);

            assert.deepEqual(params, {
                dir: 'value',
                template: 'value',
                vars: 'value',
            });

            done();
        });

        it('should create object of aliases', (done) => {
            const args = {
                d: 'value',
                t: 'value',
                v: 'value',
            };

            const params = getCommandParams(args);

            assert.deepEqual(params, {
                dir: 'value',
                template: 'value',
                vars: 'value',
            });

            done();
        });
    });
});
