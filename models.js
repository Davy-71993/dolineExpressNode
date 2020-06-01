const Model = require('./db_handlers/model');

class User extends Model{
    static fields = [
        {
            name: 'name',
            type: 'VARCHAR',
            max: 27,
            blank: false
        },
        {
            name: 'email',
            type: 'VARCHAR',
            max: 27,
            blank: false
        },
        {
            name: 'password',
            type: 'VARCHAR',
            max: 27,
            blank: false
        }
    ]
    constructor(username, email, password){
        super();
        this.username = username;
        this.email = email;
        this.password = password; 
    }

}

const Student = () => {
    
}


module.exports.Student = Student;
module.exports.User = User;