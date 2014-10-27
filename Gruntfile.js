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
            watch: {
                src: "node_modules/resume/Gruntfile.js",
                tasks:['sub:watch']
            },
            build: {
                src: "node_modules/resume/Gruntfile.js",
                tasks:['sub:build']
            },
        },
        watch: {
            server: {
                files: ['app.js', 'server.js', 'Gruntfile.js', 'node_modules/*']
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
                tasks: ['nodemon', 'compass','hub:watch', 'node-inspector', 'watch:server'],
                options: {
                    logConcurrentOutput: true
                }
            },
            prod: {
                tasks: ['nodemon',  'compass','hub:watch', 'watch'],
                options: {
                    limit: 5
                }
            }
        },
        compass: {
            all: {
                options: {
                    sassDir: 'src/scss',
                    cssDir: 'public/css',
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-hub');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-node-inspector');
    grunt.loadNpmTasks('grunt-contrib-compass');



    grunt.registerTask('default', ['env:dev', 'hub:build','concurrent:dev']);
    grunt.registerTask('production', ['env:prod', 'hub:build', 'concurrent:prod']);
    grunt.registerTask('remote', []);
}
