var Arrow = require('arrow');

var TestRoute = Arrow.Router.extend({
    name : 'compositeExample',
    path : '/compositeExample',
    method : 'POST',
    description : 'this is an example web route, accessing composite model data',
    action : function(req, resp, next) {
        var homeParams = {
            "name" : "Test Name - Vacation Home",
            "address" : "No Address",
            "comment" : "Sample test"
        };
        var FinalHomeModel = Arrow.Model.getModel('finalHome');
        var FinalRoomModel = Arrow.Model.getModel('finalRoom');

        FinalHomeModel.create(homeParams, function(err, results) {
            if (err) {
                req.logger.error(JSON.stringify(err));
                next(err);
            } else {
                req.logger.info('got FinalHomeModel ' + JSON.stringify(results));

                var roomParams = {
                    "home_id" : results.id,
                    "name" : "Entertainment Room - Vacation Home",
                    "comment" : "Sample test"
                };
                FinalRoomModel.create(roomParams, function(err, results) {
                    if (err) {
                        req.logger.error(JSON.stringify(err));
                        next(err);
                    } else {
                        req.logger.info('got FinalRoomModel ' + JSON.stringify(results));
                        resp.json(results);
                        next(null);
                    }
                });
            }
        });
    }
});

module.exports = TestRoute;
