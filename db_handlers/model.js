
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

    tableName = () => this.toString();
}
 
module.exports = Model;