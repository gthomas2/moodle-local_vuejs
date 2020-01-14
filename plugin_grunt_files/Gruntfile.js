/**
 * This grunt file relies on local_vuejs to function.
 * IMPORTANT: npm install in this directory is required
 * IMPORTANT: npm install in local/vuejs directory is required
 * IMPORTANT: npm install -g babel-cli is required for babel AMD task to work
 * IMPORTANT: To use grunt babel, you must have a .babelrc file in this plugins directory with content:
 * {
 *     "presets": ["env"]
 * }
 * @param grunt
 */
module.exports = function(grunt) {
    // This path must be a relative path to vuejs - it must also end in a fwd slash.
    // Modify this if your plugin has a different relative path to local/vuejs.
    var vuejsPath = "../../local/vuejs/";

    require("grunt-load-gruntfile")(grunt);
    grunt.loadGruntfile(vuejsPath + "Gruntfile.js");
};