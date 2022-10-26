const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: "mangadb",
    user: 'mangaowner',
    password: 'powned',
})

client.connect();

module.exports = client;