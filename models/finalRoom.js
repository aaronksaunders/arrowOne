var Arrow = require("arrow");

var Model = Arrow.createModel("finalRoom", {
    "fields" : {
        "home_id" : {
            "type" : "Number"
        },
        "name" : {
            "type" : "String"
        },
        "comment" : {
            "type" : "String"
        }
    },
    "connector" : "memory",
    "actions" : ["create", "read", "update", "delete", "deleteAll"],
    "singular" : "finalRoom",
    "plural" : "finalRooms"
});

module.exports = Model; 