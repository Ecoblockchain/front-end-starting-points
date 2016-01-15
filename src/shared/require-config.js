require.config({

	baseUrl: '../',

	paths: {
		jquery: 'shared/vendor/jquery/dist/jquery.min',
		underscore: 'shared/vendor/underscore/underscore-min',
		backbone: 'shared/vendor/backbone/backbone-min',
		json2: 'shared/vendor/json2/json2'
	},

	// map: {

	// },

	shim: {
		jquery: {
			exports: 'jQuery'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['jquery', 'underscore', 'json2'],
			exports: 'Backbone'
		},
    	json2: {
      		exports: 'JSON'
    	}
	}

});