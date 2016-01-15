require(['backbone', 'views/app-view'],

  	function(Backbone, AppView) {

    'use strict';

    // var router = new AppRouter();
    // Backbone.history.start({
    //   root: '/'
    // });

	var appView = new AppView();
	$("#content").html( appView.render().$el );


});