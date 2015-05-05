module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: '\n\n/* --- Ny fil --- */ \n\n'
			},
			app: {
				src: [
					'uncompiled/js/game/module.js',
					'uncompiled/js/game/*.js'
				],
				dest: 'compiled/js/game.packed.js'
			},
			libs: {
				src: [
					'uncompiled/js/lib/angular.min.js',
					'uncompiled/js/lib/*.js'
				],
				dest: 'compiled/js/libraries.packed.js'
			}
		},
		jshint: {
			files: [
				'uncompiled/js/**/*.js'
			],
			options: {
				// options here to override JSHint defaults
				globals: {
				jQuery: true,
				console: true,
				module: true,
				document: true
			}
		}
	},
	sass: {
		options: {
			sourceMap: true
		},
		dist: {
			files: {
				'compiled/css/main.css': 'uncompiled/sass/main.scss'
			}
		}
	},
	watch: {
		options: {
			debounceDelay: 250,
			livereload: true
		},
		styles: {
			files: ['uncompiled/sass/**/*.scss'],
			tasks: ['sass']
		},
		images: {
			files: ['uncompiled/images/**/*'],
			tasks: ['sass']
		},
		scripts: {
			files: ['uncompiled/js/**/*.js'],
			tasks: ['concat']
		}
	},
	connect: {
		server: {
			options: {
				port: 9001,
				keepalive: true
			}
		}
	}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'concat', 'sass']);
	grunt.registerTask('js', ['jshint', 'concat']);
};