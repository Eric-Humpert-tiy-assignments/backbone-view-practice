(function() {

  var ClickableView = Backbone.View.extend({

    //TODO: call the "toggle" function when someone clicks on the view

    toggle: function() {
      this.$el.toggleClass('selected');
    },

    render: function() {
      this.$el.html('click me');
      return this;
    }
  });

  var view = new ClickableView({ el: $('#clickable-view') });
  view.render();

})();
