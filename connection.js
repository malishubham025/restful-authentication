const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: " ", // Ensure the password is correctly set
    database: "project"
});

connection.connect((err) => {
    if (err) {
        console.log("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database");
    }
});

module.exports = connection;
