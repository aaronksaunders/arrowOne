var Arrow = require("arrow");

var Model = Arrow.createModel("finalHome", {
    "fields" : {
        "home_id" : {
            "type" : "Number"
        },
        "name" : {
            "type" : "String"
        },
        "address" : {
            "type" : "String"
        },
        "comment" : {
            "type" : "String"
        }
    },
    "connector" : "memory",
    "actions" : ["create", "read", "update", "delete", "deleteAll"],
    "singular" : "finalHome",
    "plural" : "finalHomes"
});

module.exports = Model; 