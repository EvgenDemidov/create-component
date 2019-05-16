const fs = require('fs');

const {
    TEMPLATE_TAG_REG_EXP,
    COMPONENT_NAME_REG_EXP,
    PARAM_NAMES,
} = require('./config');


const getCommandParams = (args = {}) => {
    const {
        DIR = '',
        TEMPLATE = '',
        VARS = '',
    } = PARAM_NAMES;

    return {
        dir: args[DIR] || args[DIR[0]] || null,
        template: args[TEMPLATE] || args[TEMPLATE[0]] || null,
        vars: args[VARS] || args[VARS[0]] || null,
    };
};


const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, content) => {
            if (error) {
                return reject(error);
            }

            resolve(content);
        });
    })
};


const createObjectOfStringAttrs = (stringAttrs = '') => {
    return stringAttrs.split(/\s/).reduce((result, item) => {
        if (item.trim()) {
            const [
                name,
                value,
            ] = item.split('=');

            result[name] = value.replace(/['"]/g, '');
        }

        return result;
    }, {});
};


const componentParser = (content, params = {}) => {
    if (typeof content !== 'string'){
        return [];
    }

    const {
        componentName = '',
        callbackFn = a => a,
    } = params;

    const tags = [];

    (content.replace(COMPONENT_NAME_REG_EXP, componentName)
        .match(TEMPLATE_TAG_REG_EXP) || [])
        .forEach((template) => {
            template.replace(TEMPLATE_TAG_REG_EXP, (item, tag, attributes, content) => {
                tags.push(callbackFn({
                    tag,
                    params: createObjectOfStringAttrs(attributes.trim()),
                    content: content.trim()
                }));
            })
        });

    return tags.filter(Boolean);
};


module.exports = {
    componentParser,
    getCommandParams,
    readFile,
};