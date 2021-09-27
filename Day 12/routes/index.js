var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middleware/registerCheck');
var register = require('../controllers/register');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/*

Things to do carefully - 1. Performance , 2. edge cases , 3. security
-------------------------------------------------------
level-1
requires = {email , firstName, lastName , password, comfirmPassword} - req.body;
email validation = {. , @};
password validation
comfirm password validation
------------------------------------------------------------
level -2
js/sql injection se bachao
-----------------------------------------------------------
level -3
check if the input email already exists or not
password hashing
email will always be in lowercase
save
---------------------------------------------------------------
*/

router.post('/register', registerInitialCheck, register)


module.exports = router;
