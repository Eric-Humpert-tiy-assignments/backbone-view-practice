(function() {

  var SimpleModel = Backbone.Model.extend();
  var fred = new SimpleModel({ name: 'Fred', age: 54 });

  var SimpleModelView = Backbone.View.extend({

    render: function() {
      this.$el.html('<p>A view for ' + this.model.get('name') + ' (age ' + this.model.get('age') + ')!</p>')
      return this;
    }
  });

  var view = new SimpleModelView({ el: $('#simple-model-view'), model: fred });
  view.render();

})();
