<?php

defined('MOODLE_INTERNAL') || die();

function local_vuejs_before_standard_html_head() {
    global $PAGE, $CFG;

    static $included = false;

    if ($included) {
        return;
    }

    // This is truly awful but we need this code to be available before AMD 'define' code.
    // It resolves a chicken and egg scenario.
    // Example loading vue via amd:
    // define(['local_vuejs_req/vue'], function(Vue) {
    //    window.console.log('Vue', Vue);
    // });
    //
    // Example configuring own plugin lib window.local_vuejs_req_config('local_myplugin', 'vendorjs/corejs',
    // {
    //     cdnURL: 'https://unpkg.com/core-js-bundle@3.5.0/minified',
    //     enforceDefine: false,
    //     registerName: 'local_myplugin/corejs'
    // });

    $jscode = <<<JS
    /**
     *
     * @param frankenPlugin
     * @param jsPath
     * @param {object} options : {cdnURL: string, enforceDefine: bool}
     *
     */
    // Note We make this function global so that it can be called *before* define in other AMD modules.
    window.local_vuejs_req_config = function(frankenPlugin, jsPath, options) {
        options = options ? options : {};
        var enforceDefine = options.enforceDefine ? options.enforceDefine : false;
        var registerName = options.registerName ? options.registerName : false;
        if (!registerName) {
            var tmpArr = jsPath.split('/');
            // Note we append _req to the end of the frankenstyle plugin name to avoid collisions with core stored
            // in your plugin's amd folder.
            registerName = frankenPlugin + '_req/' + tmpArr[tmpArr.length-1];
        }
        var cdnURL = options.cdnURL ? options.cdnURL :  null;
        var jsrev = M.cfg.jsrev;
        var path = M.cfg.wwwroot + '/local/vuejs/javascript.php/' + jsrev + '/' + frankenPlugin + '/' + jsPath;
    
        var paths = {};
        if (cdnURL) {
            paths[registerName] = [
                cdnURL,
                // CDN Fallback - whoop whoop!
                path
            ];
        } else {
            paths[registerName] = path;
        }
        require.config({
            enforceDefine: enforceDefine,
            paths: paths
        });
    };
    
    if (M.cfg.jsrev && M.cfg.jsrev == -1) {
        // Use the developer version.
        window.local_vuejs_req_config('local_vuejs', 'vendorjs/vue');
    } else {
        // Use the minified / CDN version.
        window.local_vuejs_req_config('local_vuejs', 'vendorjs/vue-min', {
            cdnURL: 'https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min'
        });  
    }
    
    window.local_vuejs_req_config('local_vuejs', 'vendorjs/vuex');
JS;

    $PAGE->requires->js_init_code($jscode);
    $included = true;
}