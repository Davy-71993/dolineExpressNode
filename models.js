const Model = require('./db_handlers/model');

class User extends Model{
    static fields = [
        {
            name: 'username',
            type: 'VARCHAR',
            max: 27,
        },
        {
            name: 'email',
            type: 'VARCHAR',
            max: 27,
        },
        {
            name: 'password',
            type: 'VARCHAR',
            max: 27,
        }
    ]
    static str = User.name;
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


// const sql = require('./db_handlers/sql')
// user = new User('davy', 'davy@gmail.com', 'pasword')

// console.log(user['str']);
// console.log(sql.insert('users', user.data().keys))