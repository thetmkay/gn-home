module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        env: {
            dev: {
                NODE_ENV: 'development'
            },
            prod: {
                NODE_ENV: 'production'
            }
        },
        hub: {
            all: {
                src: "node_modules/resume/Gruntfile.js"
            }
        },
        watch: {
            server: {
                files: ['*.js']
            }
        },
        nodemon: {
          dev: {
            script: 'server.js'
          }
        },
        'node-inspector': {
            dev: {}
        },
        concurrent: {
            dev: {
                tasks: ['nodemon', 'node-inspector', 'watch:server'],
                options: {
                    logConcurrentOutput: true
                }
            },
            prod: {
                tasks: ['nodemon', 'watch']
            }
        }

    });

    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-hub');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-node-inspector');



    grunt.registerTask('default', ['env:dev', 'concurrent:dev']);
    grunt.registerTask('production', ['env:prod', 'concurrent:prod']);

}
