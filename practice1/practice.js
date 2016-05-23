(function() {

  var SimpleRenderingView = Backbone.View.extend({

    render: function() {
      this.$el.html('<span>You have added a span!</span>')
      return this;
    }

  });

  var view = new SimpleRenderingView({ el: $('#simple-rendering-view')});
  view.render();

})();
