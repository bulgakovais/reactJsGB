// const config = {
//     verbose: true,
//   };

//   module.exports = config;

//   // Or async function
const { defaults } = require('jest-config')
module.exports = async() => {
    return {
        verbose: true,
        errorOnDeprecated: true,
        moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    };
};