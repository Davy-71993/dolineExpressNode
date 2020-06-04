const router = require('express').Router();
const { User } = require('../models')
const { pool } = require('../db_handlers/connect');
const sql = require('../db_handlers/sql');

router.post('/register', (req, res)=>{
    const user = new User(req.body.username, req.body.email, req.body.password);
    user.save('users')
        .then(rows => res.json(rows))
        .catch(err => res.json(err))
})

module.exports = router;