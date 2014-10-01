Webmaptest.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        var url = "http://50.117.0.42:1337/List/GetList/1/0?format=json";
        console.log(url);

        return Ember.$.getJSON(url)
            //returns Promise object
            .then(function(data) {

                console.log(data);
                return data;

                //return ['red', 'yellow', 'blue'];

        });
    }
});
