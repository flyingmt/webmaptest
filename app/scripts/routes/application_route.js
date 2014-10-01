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
                var maps = [];

                for (var guid in data.ListInfomation) {
                    var level1 = data.ListInfomation[guid];
                    console.log(level1.DisplayName);

                    for (var guid_2 in level1.Children)
                    {
                        console.log("-- " + level1.Children[guid_2].DisplayName);

                        for (var guid_3 in level1.Children[guid_2].Children)
                        {
                            console.log("-- -- " + level1.Children[guid_2].Children[guid_3].DisplayName);


                        }
                    }
                }

                return data;

                //return ['red', 'yellow', 'blue'];


                /*
                artists.push(FirstEmber.Artist.create({
                    id: i + 1,
                    type: 'artist',
                    name: entry.name,
                    hotttnesss: entry.hotttnesss,
                    enid: entry.id
                }));
                */

        });
    }
});
