module.exports = function(grunt) {
	grunt.initConfig({
    concurrent: {
      target: {
        tasks: ['connect', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
		sass: {
    		dist: {
    			options: {
            		style: 'compressed',
            		sourcemap: 'none',
            		noCache: true
        		},
      			files: {
        			'assets/css/style.min.css': 'app/styles/*.scss'
      			}
    		}
  		},
		connect: {
    		server: {
      			options: {
        			port: 9001,
              keepalive:true,
        			options: {
            			index: 'index.html',
            			maxAge: 300000,
          			}
      			}
    		}
  		},
		uglify: {
			     'assets/js/app.js': 'app/app.js',
           'assets/js/wooza.js':'app/scripts/**/*.js',
    },
    watch: {
  			js: {
    			files: ['app/app.js','app/scripts/**/*.js'],
    			tasks: ['uglify']
  			},
        css: {
          files: ['app/styles/*.scss'],
          tasks: ['sass']

        }
		},
  	open : {
    		build : {
    			path : 'http://localhost:9001/app/'
    		}
    	}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-open');
  grunt.registerTask('default', ['uglify','sass','open','concurrent:target']);
  grunt.registerTask('build', ['uglify','sass']);
  grunt.registerTask('run', ['open','connect']);
};
