const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        //need an absolute path
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
}