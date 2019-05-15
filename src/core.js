function getCommandParams(args = {}, paramNames = {}) {
    const {
        DIR = [],
        TEMPLATE = [],
        VARS = [],
    } = paramNames;

    return {
        dir: args[DIR[0]] || args[DIR[1]] || null,
        template: args[TEMPLATE[0]] || args[TEMPLATE[1]] || null,
        vars: args[VARS[0]] || args[VARS[1]] || null,
    };
}


module.exports = {
    getCommandParams,
};