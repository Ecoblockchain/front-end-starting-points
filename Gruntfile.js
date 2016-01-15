module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');


	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		express: {
			all: {
				options: {
					port: 9000,
					hostname: "0.0.0.0",
					keepalive: true,
					bases: ['public'],
					livereload: true
				}
			}
		},

		open: {
			all: {
				path: 'http://localhost:<%= express.all.options.port%>'
			}
		},

		watch: {
			all: {
				options: {
					spawn: false,
					livereload: true,
					debounceDelay: 2000,
				},
				files: ['src/**/*.html', 'src/**/*.js', 'src/**/*.less']
			}
		},

		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd: 'src/',
						src: ['**/*.html', '**/*.js', 'images/*'],
						dest: 'public/'
					},
				]
			}
		},

		less: {
			dev: {
				options: {
					sourceMap: true,
					expand: true,
					flatten: true,
					compress: true,
					ieCompat: true,
					strictImports: true,
					filter: 'isFile',
					relativeUrls: true
				},
				files: {
					'public/stylesheets/main.css': 'src/less/main.less',
				}
			}
		}


	});

  	grunt.registerTask('server', 'Run grunt-express server, open broswer and then watch files', ['express', 'open', 'watch']);

	grunt.registerTask('default', '', ['copy', 'less', 'server']);

  	// grunt.registerTask('build', 'Build the web application for deployment', ['copy', 'requirejs');

	grunt.event.on('watch', function (action, filepath) {
		grunt.task.run('copy');
		grunt.task.run('less');
	});


}