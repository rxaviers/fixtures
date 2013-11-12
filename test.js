define([
    "jquery",
    "can/util/fixture"
], function($, fixture) {
    fixture("GET /foo/bar", function() {
        return {
            id: 1,
            foo: "bar"
        };
    });
    console.log("->", JSON.stringify($.get("/foo/bar").always(function() {
        console.log("get", arguments);
    })));
});
