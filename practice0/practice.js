(function() {

  var SimpleRenderingView = Backbone.View.extend({

    render: function() {
      //Add code here to render
      return this;
    }

  });

  var view = new SimpleRenderingView({ el: $('#simple-rendering-view')});
  view.render();

})();
