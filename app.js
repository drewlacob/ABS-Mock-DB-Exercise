const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "drewlacob",
    port: "5432",
    password: "REDACTED",
    database: "mydb"
})

client.connect(function(err) {
if (err) throw err;
console.log("Connected to mydb!");
});

// Create database "mydb"
client.query("CREATE DATABASE mydb", function (err, result) {
  if (err) {
  if (err.code == '42P04') {
  console.log("Database already created!");
  } else {
  throw(err);
  } } else console.log("Database created");
});

// Create table of accounts
var sql = "CREATE TABLE accounts (id serial PRIMARY KEY, acct_id integer NOT NULL, first_name VARCHAR(50), last_name VARCHAR(50), age VARCHAR(2), race VARCHAR(100), gender VARCHAR(20), phone VARCHAR(11), zip VARCHAR(5))";
client.query(sql, function (err, result) {
  if (err){
  if (err.code == '42P07')
    console.log('Table already created');
  else throw err;
  } else {
  console.log("Table created");
  }
});

// Insert mock data
const accounts = [
    { acct_id: '27', first_name: 'Corn', last_name: 'on the cob', age: '2', race: 'Vegetable', gender: 'Male', phone: '1234567890', zip: '54321'},
    { acct_id: '32', first_name: 'Green', last_name: 'Squash', age: '3', race: 'Vegetable', gender: 'Female', phone: '0123456789', zip: '12345'},
    { acct_id: '9', first_name: 'Red', last_name: 'Grape', age: '37', race: 'Fruit', gender: 'Male', phone: '1231231234', zip: '12121'}
];

for (let i = 0; i < accounts.length; i += 1) {
    const account = accounts[i];
    var insertsql = `INSERT INTO accounts (acct_id, first_name, last_name, age, race, gender, phone, zip) VALUES ('${account.acct_id}', '${account.first_name}', '${account.last_name}', '${account.age}', '${account.race}', '${account.gender}', '${account.phone}', '${account.zip}') ON CONFLICT DO NOTHING;`;
    client.query(insertsql, function (err, result) {
        if (err) throw err;
        console.log("Mock data " + i + " inserted into table of accounts!");
    });
  }

// Retrieve mock data from database and log to console
function GET() {
    client.query("SELECT * FROM accounts", function (err, result, fields) {
        if (err) throw err;
        console.log(result.rows);
    })
};

GET();