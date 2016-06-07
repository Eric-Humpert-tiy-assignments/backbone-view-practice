(function() {

  var SimpleModel = Backbone.Model.extend();
  var fred = new SimpleModel({ name: 'Fred' });

  var SimpleModelView = Backbone.View.extend({

    render: function() {
      //TODO: render the paragraph here!
      var template = _.template("<p>A view for <%= name %>!</p>");
      this.$el.html(template({name: fred.get("name")}));
      return this;
    }

  });

  var view = new SimpleModelView({ el: $('#simple-model-view'), model: fred });
  view.render();

})();
