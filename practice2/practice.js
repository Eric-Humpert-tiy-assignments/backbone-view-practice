(function() {

  var SimpleModel = Backbone.Model.extend();
  var fred = new SimpleModel({ name: 'Fred' });

  var SimpleModelView = Backbone.View.extend({

    render: function() {
      //TODO: render the paragraph here!
    }

  });

  var view = new SimpleModelView({ el: $('#simple-model-view'), model: fred });
  view.render();

})();
