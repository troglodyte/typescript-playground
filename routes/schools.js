var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a schools resource');
});
router.get('/:schoolId/students', function(req, res, next) {
  const schoolId = req.params.schoolId;
  res.send(`respond with students for school ${schoolId}`);
});

module.exports = router;
