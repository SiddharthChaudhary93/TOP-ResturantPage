const path = require('path');

module.exports ={
    mode:"development",
    entry : "./src/index.js",
    output:{
        path: path.resolve(__dirname,'dist'),
        filename : "main.js"
    },
    watchOptions:{
        ignored:/node_modules/,
        aggregateTimeout: 500,
    }
}