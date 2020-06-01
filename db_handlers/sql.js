const createTable = (name, fields) => {
    const id = name.slice(0, -1);
let createString = `CREATE TABLE ${name} (${id}_id SERIAL PRIMARY KEY,`;
    for(const field in fields){
        createString += ` ${fields[field].name} ${fields[field].type}`;
        if (fields[field].max !== NaN){
            createString += `(${fields[field].max})`;
        }
        if (!fields[field].blank){
            createString += ` NOT NULL`;
        }
        if (fields[fields.length -1] !== fields[field]){
            createString += `,`;
        }
    }
    createString += `)`;
    return createString;
}

const all = table =>  `SELECT * FROM ${table}`;

const insert = (table, fields) =>{
    queryString = `INSERT INTO ${table}(`;
    for(const field of fields){
        if(fields[0] !== field){queryString += ' '}
        queryString += `${field.name}`;
        if(fields[fields.length - 1] !== field){ queryString += ',' }
    }
    queryString += `) VALUES(`;
    for(const field in fields){
        if(fields[0] !== fields[field]){queryString += ' '}
        queryString += `$${parseInt(field) + 1}`;
        if(fields[fields.length - 1] !== fields[field]){ queryString += ',' }
    }
    queryString += ') RETURNING *'

    return queryString;
}


module.exports.createTable = createTable;
module.exports.all = all;
module.exports.insert = insert;
