var mergeTrees = require('broccoli-merge-trees')
var compileStylus = require('broccoli-stylus-single');

var styles = 'styles'; // tree ?

var appCss = compileStylus([styles], 'app.styl', 'app.css')

module.exports = mergeTrees([styles]);