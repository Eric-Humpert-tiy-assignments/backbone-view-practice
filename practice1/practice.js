(function() {

  //TODO: Create a backbone view named "SimpleRenderingView", uncomment what you see below, and complete the task.

  var SimpleRenderingView = Backbone.View.extend({

    render: function() {
      this.$el.html("<span>Habeeb it I'm practicing backbone!</span>");
      return this;  
    }
  });



  var view = new SimpleRenderingView({ el: $('#simple-rendering-view')});
  view.render();

})();
