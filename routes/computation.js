var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let x = Math.random();
    if (req.query.x != undefined) {
        x = req.query.x;
    }

    res.render('computation', { x:x, pow:Math.pow(x,3), sign:Math.sign(x), tanh:Math.tanh(x), trunc:Math.trunc(x)  });
});

module.exports = router;