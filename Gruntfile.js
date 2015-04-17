var path = require('path');

module.exports = function(grunt) {

    grunt.initConfig({

        bower: {
            install: {
                options: {
                    targetDir: 'src/main/resources/js/vendor',
                    layout: 'byComponent'
                    //layout: function(type, component) {
                    //    if (type === 'sinon-lib') {
                    //        return path.join('js', 'ext', 'sinon');
                    //    } else if (type === 'js') {
                    //        return path.join(type, 'ext');
                    //    } else {
                    //        return path.join('css', 'ext', component);
                    //    }
                    //}
                }
            }
        }
    });

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-bower-task');

    // Default Task
    grunt.registerTask('default', ['bower']);
};
