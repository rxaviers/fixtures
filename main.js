require.config({
    paths: {
        can: "bower_components/canjs/amd/can",
        jquery: "bower_components/jquery/jquery"
    }
});

require([
    "jquery",
    "can/util/fixture"
], function($, fixture) {
    fixture("GET /foo/bar", function() {
        return {
            id: 1,
            foo: "bar"
        };
    });
    console.log("->", JSON.stringify($.get("/foo/bar").always(function(data) {
        console.log("get", JSON.stringify(data));
    })));
});
