const Pool = require('pg').Pool;

const sql = require('./sql')
const models = require('../models');

const pool = db => new Pool(
    {
        user: 'postgres',
        password: 'superuser',
        host: 'localhost',
        port: 5432,
        database: db
    }
);

const createModelSchema = async query => {
    try {
        const tb = await pool('asubo').query(query);
        console.log(`Table ${name.toLowerCase() + 's'} created successfully`)
    } catch (err) {
        console.log(err.message);
    }
}

const deleteModelSchema = async name => {
    try {
        const tb = await pool('asubo').query(`DROP TABLE ${name}`);
        console.log(`Table ${name} deleted successfully`)
    } catch (err) {
        console.log(err.message);
    }
}

const allModelSchemas = async () => {
    try {
        const res = await pool('asubo').query('SELECT table_name FROM information_schema.tables WHERE table_schema = $1 ORDER BY table_name', ['public'])
        rows = res.rows;
        const names = rows.map(item => item.table_name);

        return names;
    } catch (error) {
        console.log('An error occured: ', error.message)
    }
}

const all = async table => {
    try {
        const res = pool('asubo').query(sql.all(table))
        rows = (await res).rows
        console.log('Collecting data from ' + table)
        return rows;
    } catch (error) {
        console.log(error.message);
    }
}

const migrate = () => {
    const names = [];
    for(name in models){
        names.push(name);
    }

    for (const name of names){
        const model = models[name];
        if(model.fields){
            createModelSchema(sql.createTable(name.toLowerCase() + 's', model.fields));
        }
    }
}

module.exports.migrate = migrate;
module.exports.pool = pool;
module.exports.allModelSchemas = allModelSchemas;
module.exports.deleteModelSchema = deleteModelSchema;
module.exports.createModelSchema = createModelSchema;
module.exports.all = all;



