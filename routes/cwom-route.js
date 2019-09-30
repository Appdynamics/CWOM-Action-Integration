var express = require('express');
var router = express.Router();
var CWOMService = require('../src/CWOMService.js');
var cwomsvc = new CWOMService({});


router.get('/actions', function(req, res) {
    cwomsvc.getTurboActionList(false).then((actions) => {

        var results  = {
            cwomserver: cwomsvc.config.turboserver,
            actions : actions
        }
        res.status(200).send(results);
    } , (err) => {
        res.status(500).send({});
    });
    

	
});

router.get('/mockData', function(req, res) {
    cwomsvc.getTurboActionListMockData(false).then((actions) => {
        var results  = {
            cwomserver: cwomsvc.config.turboserver,
            actions : actions,
            
        }
        res.status(200).send(results);
    } , (err) => {
        res.status(500).send({});
    });
    

	
});

module.exports = router;