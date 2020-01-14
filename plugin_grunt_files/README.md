#Files required to be copied to your plugin root

Note, the files inside this folder should be copied to your plugin root if you want to use vuejs's grunt tasks.
You will then need to run npm install from within your plugin root folder.
After that the following tasks will be exposed:

grunt watch
- will observe changes to .scss, .vue, /amd/src/*.js files and automatically run tasks on them if these files change.

grunt compile
- compiles the styles.scss file within your project's scss folder to a styles.css file in your project root

grunt decache
- drops the moodle cache

grunt vue
- compiles the .vue files and transpiles from es6 to es5

grunt babel
- this compiles your amd modules AND transpiles from es6 to es5

grunt build
- runs babel, vue and compile in one go

All these grunt commands should be run from the cli from within your projects root directory.

Also note: You should create a .gitignore file in your project root to exclude **/node_modules
