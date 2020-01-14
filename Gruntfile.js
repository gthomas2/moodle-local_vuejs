/**
 * Gruntfile for compiling plugin .scss files AND .vue files.
 *
 * This file configures tasks to be run by Grunt
 * http://gruntjs.com/ for the current theme.
 *
 * Requirements:
 * nodejs, npm, grunt-cli.
 *
 * Installation:
 * node and npm: instructions at http://nodejs.org/
 * grunt-cli: `[sudo] npm install -g grunt-cli`
 * node dependencies: run `npm install` in the root directory.
 *
 * Usage:
 * Default behaviour is to watch all .less files and compile
 * into compressed CSS when a change is detected to any and then
 * clear the theme's caches. Invoke either `grunt` or `grunt watch`
 * in the theme's root directory.
 *
 * To separately compile only moodle or editor .less files
 * run `grunt less:moodle` or `grunt less:editor` respectively.
 *
 * To only clear the theme caches invoke `grunt exec:decache` in
 * the theme's root directory.
 *
 * @author Joby Harding / David Scotson / Stuart Lamour / Guy Thomas (vue files and es5 transpilation)
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
const sass = require('node-sass');

module.exports = function(grunt) {

    // We need to include the core Moodle grunt file too, so that we can run the tasks that are defined there.
    require("grunt-load-gruntfile")(grunt);
    grunt.loadGruntfile("../../Gruntfile.js");

    // PHP strings for exec task.
    const moodleroot = 'dirname(dirname(__DIR__))',
        configfile = moodleroot + ' . "/config.php"';
    let decachephp = '';

    decachephp += "define(\"CLI_SCRIPT\", true);";
    decachephp += "require(" + configfile + ");";

    // The previously used theme_reset_all_caches() stopped working for us, we investigated but couldn't figure out why.
    // Using purge_all_caches() is a bit of a nuclear option, as it clears more than we should need to
    // but it gets the job done.
    decachephp += "purge_all_caches();";

    const force = grunt.option('force') ? 1 : 0;

    const cwd = process.env.PWD || process.cwd();

    const path = require('path');

    const inAMD = path.basename(cwd) == 'amd';

    // Globbing pattern for matching all AMD JS source files.
    const es5Src = [inAMD ? cwd + '/es5/*.js' : '**/amd/es5/*.js'];
    const amdSrc = [inAMD ? cwd + '/src/*.js' : '**/amd/src/*.js'];

    /**
     * Function to generate the destination for the uglify task
     * (e.g. build/file.min.js). This function will be passed to
     * the rename property of files array when building dynamically:
     * http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
     *
     * @param {String} destPath the current destination
     * @param {String} srcPath the  matched src path
     * @return {String} The rewritten destination path.
     */
    var uglifyRename = function(destPath, srcPath) {
        destPath = srcPath.replace('src', 'build');
        destPath = destPath.replace('.js', '.min.js');
        destPath = path.resolve(cwd, destPath);
        return destPath;
    };

    /**
     * For ES5 folder.
     * Function to generate the destination for the uglify task
     * (e.g. build/file.min.js). This function will be passed to
     * the rename property of files array when building dynamically:
     * http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
     *
     * @param {String} destPath the current destination
     * @param {String} srcPath the  matched src path
     * @return {String} The rewritten destination path.
     */
    var uglifyRenameEs5 = function(destPath, srcPath) {
        destPath = srcPath.replace('es5', 'build');
        destPath = destPath.replace('.js', '.min.js');
        destPath = path.resolve(cwd, destPath);
        return destPath;
    };

    var vuephp = `define("CLI_SCRIPT", true);
    require(${configfile});
    $force = ${force};
    $workingDir = __DIR__;
    $vueCompDir = __DIR__."/vue/comps";

    if (!file_exists($vueCompDir)) {
        $files = [];
    } else {
        $files = scandir($vueCompDir);
    }

    foreach ($files as $file) {
        if ($file === "." || $file === "..") {
            continue;
        }
        $compName = $file;
        $compDir = "$vueCompDir/$compName";
        if (is_dir($compDir)) {
            $vueFile = "{$compDir}/{$compName}.vue";
            $hashFile = "{$compDir}/.vuefilehash";
            $hash = null;
            if (file_exists($hashFile)) {
                $hash = file_get_contents($hashFile);
            }
            $currentHash = sha1_file($vueFile);
            if ($currentHash === $hash && !$force) {
                echo "\\n Skipping up to date vue file {$compName}.vue \\n";
                continue;
            }
            file_put_contents($hashFile, $currentHash);

            if (file_exists($vueFile)) {
                $cmd = <<<CMD
                cd $compDir; vue-cli-service build --target lib --name $compName {$compName}.vue;
                mv $compDir/dist $compDir/modern;
                cd $workingDir; npx babel $compDir/modern -d $compDir/dist;
                cd $compDir/modern;
                find . -not -name "*.js" -not -name "*.js.map" -not -name "." -exec cp {} $compDir/dist \\;
                rm -rf $compDir/modern
CMD;
                echo shell_exec($cmd);
            }
        }
    }
    `;

    grunt.mergeConfig = grunt.config.merge;

    grunt.mergeConfig({
        eslint: {
            // Even though warnings dont stop the build we don't display warnings by default because
            // at this moment we've got too many core warnings.
            options: { "parserOptions": { "ecmaVersion": 2018 }, quiet: !grunt.option('show-lint-warnings')},
            amd: {src: amdSrc},
            babel: {src: amdSrc}
        },
        uglify: {
            amd: {
                files: [{
                    expand: true,
                    src: amdSrc,
                    rename: uglifyRename
                }],
                options: {report: 'none'}
            },
            es5: {
                files: [{
                    expand: true,
                    src: es5Src,
                    rename: uglifyRenameEs5
                }],
                options: {report: 'none'}
            }
        },
        sass: {
            compile: {
                options: {
                    compress: false,
                    implementation: sass,
                    sourceMap: true
                },
                files: {
                    "styles.css": "scss/styles.scss",
                }
            }
        },
        sasslint: {
            src: "styles.css",
            target: "scss/styles.scss"
        },
        autoprefixer: {
            options: {
                browsers: [
                    'Android 2.3',
                    'Android >= 4',
                    'Chrome >= 20',
                    'Firefox >= 24', // Firefox 24 is the latest ESR.
                    'Explorer >= 9',
                    'iOS >= 6',
                    'Opera >= 12.1',
                    'Safari >= 6'
                ]
            },
            core: {
                options: {
                    map: false
                },
                src: ['styles.css'],
            },
        },
        exec: {
            decache: {
                cmd: "php -r '" + decachephp + "'",
                callback: function(error, stdout, stderror) {
                    // Exec will output error messages.
                    // Just add one to confirm success.
                    if (!error) {
                        grunt.log.writeln("Moodle theme cache reset.");
                    }
                }
            },
            vue: {
                cmd: "php -r '" + vuephp + "'",
                callback: function(error, stdout, stderror) {
                    // Exec will output error messages.
                    // Just add one to confirm success.
                    if (!error) {
                        grunt.log.writeln("Vue compiled.");
                    }
                },
                stdout: true,
                stderr: true,
                stdin: true
            },
            babel: {
                cmd: "npx babel amd/src -d amd/es5",
                stdout: true,
                stderr: true,
                stdin: true
            },
            cleanUpEs5: {
                cmd: "rm -rf amd/es5",
                stdout: true,
                stderr: true,
                stdin: true
            }
        },
        watch: {
            // Watch for any changes to sass files and compile.
            sass: {
                files: ["scss/*.scss"],
                tasks: ["compile"],
                options: {
                    spawn: false
                }
            },
            babel: {
                files: ["amd/src/*.js"],
                tasks: ["babel"],
                options: {
                    spawn: false
                }
            },
            vue: {
                files: ["vue/comps/**/*.vue"],
                tasks: ["vue"],
                options: {
                    spawn: false
                }
            }
        }
    });

    // Load contrib tasks.
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-sass-lint');
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-exec");

    // Register tasks.
    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("compile", ["sass:compile", "autoprefixer", "decache"]);
    grunt.registerTask("decache", ["exec:decache"]);
    grunt.registerTask("vue", ["exec:vue"]);
    grunt.registerTask("babel", ["exec:babel", "eslint:babel", "uglify:es5"]);
    grunt.registerTask("build", ["babel", "vue", "exec:cleanUpEs5", "compile"]);
};
