(function() {

  var SimpleModel = Backbone.Model.extend();
  var fred = new SimpleModel({ name: 'Fred' });

  var SimpleModelView = Backbone.View.extend({

    render: function() {
      this.$el.html('<p>A view for ' + this.model.get('name') + '!</p>')
      return this;
    }
  });

  var view = new SimpleModelView({ el: $('#simple-model-view'), model: fred });
  view.render();

})();
