const Model = require('./db_handlers/model');

class User extends Model{
    static fields = [
        {
            name: 'username',
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

    text = () => {}

}

const Student = () => {
    
}


module.exports.Student = Student;
module.exports.User = User;


// const sql = require('./db_handlers/sql')
// user = new User('davy', 'davy@gmail.com', 'pasword')
// console.log(user.data().keys)
// console.log(sql.insert('users', user.data().keys))