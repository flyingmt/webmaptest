Webmaptest.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {

        var url = "";




        return ['red', 'yellow', 'blue'];
    }
});
