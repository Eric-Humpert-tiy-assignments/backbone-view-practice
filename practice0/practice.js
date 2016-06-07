(function() {

  var SimpleRenderingView = Backbone.View.extend({

    render: function() {
      //Add code here to render
      this.$el.html('<p>Hello</p>');
      return this;
    }

  });

  var view = new SimpleRenderingView({ el: $('#simple-rendering-view')});
  view.render();

})();
