let db = require('./config')

db.connect(function(err) {
  if (err) throw err;
  let sql = "CREATE DATABASE bumi";
  db.query(sql, function(err, res) {
    if (err) throw err
    console.log('Database created')
  })
})