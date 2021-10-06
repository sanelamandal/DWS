const {Pool} = require('pg');
const db = new Pool({
    host:'hattie.db.elephantsql.com',
    password:'NAsPAF7t-NqTbYMOaeYNubZ3QHGoOOoY',
    user: 'wjkfwskc',
    port: 5432,
    database:'wjkfwskc'
});

module.exports = db;