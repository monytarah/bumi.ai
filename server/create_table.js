const db = require('./config')

let sql = `CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  albumId INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  thumbnailUrl VARCHAR(255) NOT NULL
)`

db.query(sql, (err, res) => {
  if (err) throw err
  console.log('Table created')
})