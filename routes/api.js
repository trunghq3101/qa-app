var express = require('express');
var router = express.Router();

router.get('/welcome', function(req, res, next) {
    res.json({
      "ok": true,
      "result": "Welcome to free Q&A community!"
    })
});

module.exports = router;
