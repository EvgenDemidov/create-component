const PARAM_NAMES = {
    DIR: 'dir',
    TEMPLATE: 'template',
    VARS: 'vars',
};

const COMPONENT_NAME_REG_EXP = /%NAME%/g;

const TEMPLATE_TAG_REG_EXP = /^<([a-z]+)(\s.+)?>((.+|[\n\s])+?)<\/[a-z]+>$/gm;


module.exports = {
    PARAM_NAMES,
    COMPONENT_NAME_REG_EXP,
    TEMPLATE_TAG_REG_EXP,
};