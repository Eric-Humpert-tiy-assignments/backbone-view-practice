(function() {

  var SimpleModel = Backbone.Model.extend();
  var fred = new SimpleModel({ name: 'Fred', age: 54 });

  //TODO: Create a View called "SimpleModelView" and implement what is necessary.

  var view = new SimpleModelView({ el: $('#simple-model-view'), model: fred });
  view.render();

})();
