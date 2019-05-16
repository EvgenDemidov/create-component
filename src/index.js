#!/usr/bin/env node

const path = require('path');
const minimist = require('minimist');
const config = require('./config');
const core = require('./core');

const args = minimist(process.argv.slice(2));


core.readFile(path.resolve(__dirname, '..', 'templates', 'component'))
    .then((c) => {
        console.log(core.componentParser(c, { componentName: 'YTEST' }));
    })
    .catch((c) => {
        console.log(c);
    });