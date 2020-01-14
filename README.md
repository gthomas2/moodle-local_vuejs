# moodle-local_vuejs
Moodle vuejs - allows you to easily load vuejs and share it between projects.

# Important note for devs:

You will need npm setting up in order for grunt to work.
To do this run "npm install" from a terminal in the following folders

moodle/
moodle/local/vuejs

Note - for your own plugin development:
Copy the files inside local/vuejs/plugin_grunt_files into the root of your project folder - e.g:
If you want to use vue with a module, then put the files into mod/[yourmodule]

You will then need to run "npm install" from a terminal in your module root folder.

## How to compile Vue components

In a terminal, navigate to your project root folder and run "grunt vue"
Note, that for each vue file a hash is stored to avoid compiling the same component multiple times.
However, sometimes (if you are including a sub component), you may want to force all vue components to compile.
You can do this by running "grunt vue --force"

Other grunt tasks you can run

grunt compile - this compiles [yourplugindir]/styles/styles.scss if present into a styles.css file
grunt build - compiles scss, amd modules, vue components and then does an automatic decache (note you can add --force to this command)
grunt babel - compiles amd code from ES6 to ES5. NOTE: This is not as useful with Moodle 3.8 which supports ES6 transpilation when building amd.

## How to include Vue components in your plugin
Please take a look at https://github.com/gthomas2/moodle-local_vuedemo.
You will need an amd module to load up your vue component.
Here's an example of some amd code loading up a vue component.

    // This bit of code allows us to register your vue components to be loaded from your plugin.
    window.local_vuejs_req_config('local_myvueplugin', 'vue/comps', {registerName: "local_myvueplugin/vuecomps"});
    
    define([
        'core/config',
        'local_vuejs_req/vue',
        'local_myvueplugin/vuecomps/app-main'
    ], function(Config, Vue, MainComp) {
        return {
            init: function() {
                // If JS caching is turned off, then turn dev tools for vue on.
                if (parseInt(Config.jsrev) === -1) {
                    Vue.config.devtools = true;
                }
                Vue.component('app-main', MainComp);
                new Vue({ el: '#app' , store: Store.initStore(Vuex)});
            }
        };
    
    });
    
For this example, the AMD code should be called from a page which has an element with the id 'app' and a vue element with the tag "app-main"

E.g:

    require_once(__DIR__ . '/../../config.php');
    
    $PAGE->set_context(context_system::instance());
    $PAGE->set_title(get_string('pluginname', 'local_myvueplugin'));
    $PAGE->set_url(new moodle_url('/local_myvueplugin'));
    $PAGE->requires->js_call_amd('local_myvueplugin/main', 'init');
    
    echo $OUTPUT->header();
    
    $table = <<<TEMP
            <div id="app">
                <app-main></app-main>
            </div>
    TEMP;
    echo ($table);
    
    echo $OUTPUT->footer();
