const router = require('express').Router();
const { pool, createModelSchema, deleteModelSchema, allModelSchemas, all } = require('../db_handlers/connect');


router.get('/', (req, res)=>{
    try {
        all('users').then(rows =>{
            res.json(rows);
        }).catch(err =>{
            console.log('An error occured: ', err);
        });

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;