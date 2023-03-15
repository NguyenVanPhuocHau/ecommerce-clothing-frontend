const Dotenv = require('dotenv-webpack');
const path = require('path');
module.exports = {
    plugins: [new Dotenv()],
    // resolve: {
    //     alias: {
    //       '~': path.resolve(__dirname, 'src'),
    //     },
    //   },
};
