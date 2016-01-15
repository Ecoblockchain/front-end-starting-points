require.config({

	baseUrl: '/',

	paths: {
		jquery: 'vendor/jquery/jquery.min.js',
		underscore: 'vendor/underscore/undercore-min.js',
		backbone: 'vendor/backbone/backbone-min.js',
		json2: 'vendor/json2/json2.js',
	},

	map: {

	},

	shim: {
		jquery: {
			exports: 'jQuery'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['jQuery', 'underscore', 'json2'],
			exports: 'Backbone'
		},
    	json2: {
      		exports: 'JSON'
    	},
	}

});