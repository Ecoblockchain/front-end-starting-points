define(function(require) {

    var Backbone = require('backbone');

    var AppTpl = require('text!templates/app.html');
    // var AppModel = require('models/app-model');
    'use strict';

    var AppView = Backbone.View.extend({

        template: _.template(AppTpl),

        initialize: function(options) {
            console.log('AppView::initialize');
        },

        render: function() {
        this.$el.html(this.template({
            appVar: 'hello underscore template variable'
        }));
        return this;
        }

    });

    return AppView;
});
