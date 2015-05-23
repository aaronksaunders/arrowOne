var Arrow = require("arrow");

var Model = Arrow.createModel("finalHome", {
    "fields" : {
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
    "connector" : "appc.arrowdb",
    "actions" : ["create", "read", "update", "delete", "deleteAll"],
    "singular" : "finalHome",
    "plural" : "finalHomes"
});

module.exports = Model; 