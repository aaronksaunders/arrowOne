var Arrow = require("arrow");

var Model = Arrow.createModel("finalRoom", {
    "fields" : {
        "home_id" : {
            "type" : "String"
        },
        "name" : {
            "type" : "String"
        },
        "comment" : {
            "type" : "String"
        }
    },
    "connector" : "appc.arrowdb",
    "actions" : ["create", "read", "update", "delete", "deleteAll"],
    "singular" : "finalRoom",
    "plural" : "finalRooms"
});

module.exports = Model; 