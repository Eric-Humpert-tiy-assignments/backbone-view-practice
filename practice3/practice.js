(function() {

  var SimpleModel = Backbone.Model.extend();
  var fred = new SimpleModel({ name: 'Fred', age: 54 });

  //TODO: Create a View called "SimpleModelView" and implement what is necessary.

  var SimpleModelView = Backbone.View.extend({

    render: function() {
      var template = _.template("<p>A view for <%= name %> (<%= age %>)!</p>");
      this.$el.html(template({name: fred.get("name"), age: fred.get("age")}));
      return this;
    }
  })


  var view = new SimpleModelView({ el: $('#simple-model-view'), model: fred });
  view.render();

})();
