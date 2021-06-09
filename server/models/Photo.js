const db = require('../config')

class Photo {
  static fetchPhotos (cb) {
    db.query('SELECT * FROM photos', (err, res) => {
      if (err) cb(err)
      cb(null, res)
    })
  }

  static findById(id, cb) {
    db.query(`SELECT * FROM photos WHERE id=${id};`, (err, res) => {
      if (err) cb(err)
      cb(null, res[0])
    })
  }

  static addPhoto (input, cb) {
    const { albumId, title, url, thumbnailUrl } = input
    let query = `INSERT INTO photos
    (albumId, title, url, thumbnailUrl)
    VALUES 
    (${albumId}, "${title}", "${url}", "${thumbnailUrl}");`
    db.query(query, (err, res) => {
      if (err) cb(err)
      cb(null, { message: `Added with id ${res.insertId}`})
    })
  }

  static updateById(input, id, cb) {
    const { albumId, title, url, thumbnailUrl } = input
    let query = `UPDATE photos SET albumId = ${albumId}, 
    title = "${title}", url = "${url}", thumbnailUrl = "${thumbnailUrl}"
    WHERE id = ${id}`

    db.query(query, (err, res) => {
      if (err) cb(err)
      if (res.changedRows) {
        cb(null, { message: "Updated" })
      } else {
        cb({ message: "Not Found" })
      }
    })
  }

  static deleteById (id, cb) {
    let query = `DELETE FROM photos WHERE id = ${id}`
    db.query(query, (err, res) => {
      if(err) cb(err)
      if (res.affectedRows) {
        cb(null, { message: "Deleted" })
      } else {
        cb({ message: "Not Found" })
      }
    })
  }
}

module.exports = Photo