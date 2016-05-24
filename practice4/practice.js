(function() {

  var ClickableView = Backbone.View.extend({
    events: {
      'click': 'toggle'
    },

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
