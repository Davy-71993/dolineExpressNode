const { pool, createModelSchema, deleteModelSchema, allModelSchemas, all } = require('../db_handlers/connect');
const sql = require('./sql');
class Model {
    data = () => {
        const values = [];
        const keys = [];

        for(const key in this){
            if (typeof this[key] !== 'function' && typeof this[key] !== undefined && typeof this[key] !== null){
                values.push(this[key]);
                keys.push(key);
            }
                
        }
        
        return {
            keys,
            values
        }
    }

    save = async(table) => {
        const model = this;
        const modelName = model.str || 'Model';
        try {
            const newuser = await pool('asubo').query(sql.insert(table, model.data().keys), model.data().values);
            const rows = newuser.rows;
            console.log(`${modelName} ${model.username} has ben created successifully`);
            
            return rows
        } catch (error) {
            console.log(error.message);
        }

        console.log(model.data());
    }
}
 
module.exports = Model;