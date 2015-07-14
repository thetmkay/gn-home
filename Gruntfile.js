module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        env: {
            dev: {
				src:'env.json',
				NODE_ENV:'development'		
            },
            prod: {
				src:'env.json',
                NODE_ENV: 'production'
            }
        },
        hub: {
            watch: {
                src: "node_modules/resume/Gruntfile.js",
                tasks: ['sub:watch']
            },
            resume: {
                src: "node_modules/resume/Gruntfile.js",
                tasks: ['sub:build']
            },
            heart:{
                src: "node_modules/about-me/Gruntfile.js",
                tasks: ['sub:build']
            },
			books:{
				src: "node_modules/booklist/Gruntfile.js",
				tasks: ['sub:build']
			}
        },
        watch: {
            server: {
                files: ['app.js', 'server.js', 'Gruntfile.js', 'node_modules/*']
            },
            js: {
              files: ['src/js/scroll-init.js'],
              tasks: ['concat']
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
                tasks: ['nodemon', 'compass', 'hub:watch', 'node-inspector', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            },
            prod: {
                tasks: ['nodemon'],
                options: {
                    limit: 5,
                    logConcurrentOutput: true
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
        },
        concat: {
            options: {
                separator: ';',
            },
            home: {
                src: ['node_modules/jquery/dist/jquery.js', 'node_modules/skrollr/src/skrollr.js', 'node_modules/skrollr.utilities/dist/skrollr.utilities.js', 'node_modules/gn_components/js/header.js', 'src/js/scroll-init.js'],
                dest: 'public/js/home.js',
            },
            "404": {
                src: ['node_modules/jquery/dist/jquery.js', 'node_modules/gn_components/js/header.js'],
                dest: 'public/js/404.js',
            },
        }

    });

    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-hub');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-node-inspector');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');



    grunt.registerTask('default', ['env:dev', 'concat', 'compass','hub:resume','hub:books', 'hub:heart', 'concurrent:dev']);
    grunt.registerTask('production', ['env:prod', 'concat', 'compass', 'hub:resume','hub:books', 'hub:heart', 'concurrent:prod']);
    grunt.registerTask('remote', []);
}
