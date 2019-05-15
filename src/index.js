#!/usr/bin/env node

const path = require('path');
const minimist = require('minimist');
const config = require('./config');

const args = minimist(process.argv.slice(2));


console.log(getCommandParams(args, config.PARAM_NAMES));

