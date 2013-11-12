module.exports = function(grunt) {

    "use strict";

    var util = require("util");

    var mountFolder = function (connect, path) {
        return connect.static(require("path").resolve(path));
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        connect: {
            options: {
                port: 9001,
                hostname: "localhost"
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, ".")
                       ];
                    }
                }
            }
        },
        mocha: {
            all: {
                options: {
                    log: true,
                    urls: ["http://localhost:<%= connect.options.port %>/index.html"]
                }
            }
        }
    });

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.registerTask("test", [
        "connect:test",
        "mocha"
    ]);
    grunt.registerTask("default", ["test"]);

};
