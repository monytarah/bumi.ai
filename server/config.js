let mysql = require("mysql")

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: 'bumi'
})

// db.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!")
// })

module.exports = db