var Arrow = require('arrow');
var ArrowBuilder = require('arrowBuilder');

var TestRoute = Arrow.Router.extend({
	name: 'compositeExample',
	path: '/compositeExample',
	method: 'GET',
	description: 'this is an example web route, accessing composite model data',
	action: function (req, resp) {
		/**
		 * by default, routes are sync. to make them async, add a next in the action above as
		 * the last parameter and then call next when completed
		 */
		resp.render('example');
	}
});

module.exports = TestRoute;
