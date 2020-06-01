const router = require('express').Router();
const { User } = require('../models')
const { pool } = require('../db_handlers/connect');
const sql = require('../db_handlers/sql');

router.post('/register', async(req, res)=>{
    const user = new User(req.body.username, req.body.email, req.body.password);
    
    try {
        const newuser = await pool('asubo').query(sql.insert('users', user.data().keys), user.data().values);
        const rows = newuser.rows;

        res.json(rows);
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router;