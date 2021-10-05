var express = require('express');
var router = express.Router();
const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123456789',
  port: 5432
});

const getUsers = (req , res) => {
  pool.query('SELECT * FROM "Users"', (err,result) => {
    if(err)
      throw err;
    res.status(200).json(result.rows);
  });
}
/* GET users listing. */
router.get('/', getUsers);

module.exports = router;
