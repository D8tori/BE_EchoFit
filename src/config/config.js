require("dotenv").config();

// MYSQL_HOST = "118.67.133.207"
// MYSQL_USER = "ecofit"
// MYSQL_PASSWORD = "ecofit12"
// MYSQL_DATABASE = "ecofit"
// MYSQL_PORT = "3306"

module.exports = {
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE,
    port : process.env.MYSQL_PORT
};

// module.exports = {
//     host : "118.67.133.207",
//     user : "ecofit",
//     password : "ecofit12",
//     database : "ecofit",
//     port : "3306"
// };