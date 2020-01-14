<?php

require_once(__DIR__.'/../../config.php');
require_once($CFG->libdir.'/configonlylib.php');
require_once($CFG->libdir.'/jslib.php');
require_once($CFG->libdir.'/filelib.php');

// JS requests to this file should be made in the following format.
// jsrev/plugin/filearea/path
// e.g: javascript.php/1234/local_test/vendorjs/

$relativepath = get_file_argument();
$comps = array_filter(explode('/', $relativepath));
$jsrev = intval(array_shift($comps));
$plugin = array_shift($comps);
$filearea = array_shift($comps);

$info = core_plugin_manager::instance()->get_plugin_info($plugin);
$pluginpath = $info->rootdir.'/';

function send_js($jsrev, $path) {
    if ($jsrev === -1) {
        $js = file_get_contents($path);
        header('Content-Disposition: inline; filename="'. basename($path).'"');
        header('Expires: 0');
        header('Pragma: ');
        header('Accept-Ranges: none');
        header('Content-Type: application/javascript; charset=utf-8');
        header('Content-Length: '.strlen($js));
        header('Cache-Control: "no-cache, private, pre-check=0, post-check=0, max-age=0"');
        echo $js;
        die;
    }
    else {
        $etag = sha1("$path/$jsrev");
        js_send_cached($path, $etag, basename($path));
    }
}

if ($filearea === 'vendorjs') {
    // Typically CDN fall backs would go in vendorjs.
    $path = $pluginpath . 'vendorjs/' . implode('/', $comps);
    send_js($jsrev, $path);
    return true;
} else if ($filearea === 'vue') {

    // Vue components.
    $jsfile = array_pop($comps);
    $compdir = basename($jsfile, '.js');
    $umdfile = $compdir . '.umd.js';
    $comps[] = $compdir;
    $comps[] = 'dist';
    $comps[] = $umdfile;
    $path = $pluginpath . 'vue/' . implode('/', $comps);
    send_js($jsrev, $path);
    return true;
} else {
    throw new coding_exception('Unsupported pluginfile area');
}