require(['backbone', 'views/app-view'],

  	function(Backbone, AppView) {

    'use strict';

    // console.log('index.js jQuery', jQuery);
    // console.log('index.js underscore', _);
    // console.log('index.js Backbone', Backbone);

    // var router = new AppRouter();
    // Backbone.history.start({
    //   root: '/'
    // });

	var appView = new AppView();
	$("#content").html( appView.render().$el );


});