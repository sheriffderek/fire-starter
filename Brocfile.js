// http://www.oligriffiths.com/broccolijs

var mergeTrees = require('broccoli-merge-trees')
var compileStylus = require('broccoli-stylus-single');

const appRoot = "styles";

var appCss = compileStylus([appRoot], 'app.styl', 'app.css', {annotation: "STYLUS files"});

module.exports = mergeTrees([appCss], { annotation: "FINAL OUTPUT", overwrite: true }); // overwrite not working