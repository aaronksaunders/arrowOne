var Arrow = require("arrow");

var Model = Arrow.createModel("composite",{
	"fields": {
		"home": {
			"model": "finalHome",
			"type": "Object"
		},
		"rooms": {
			"model": "finalRoom",
			"type": Array
		}
	},
	"connector": "appc.composite",
	"actions": [
		"create",
		"read",
		"update",
		"delete",
		"deleteAll"
	],
	"metadata": {
		"left_join": [
			{
				"model": "finalRoom",
				"multiple": true,
				"join_properties": {
					"home_id": "id"
				}
			}
		]
	},
	"singular": "composite",
	"plural": "composites"
});


module.exports = Model;