const axios = require('axios')
const db = require('./config')

axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(async res => {
    const data = res.data
    for (let i = 0; i < data.length; i++) {
      let sql = `INSERT INTO photos
      (id, albumId, title, url, thumbnailUrl)
      VALUES 
      (${data[i].id}, ${data[i].albumId}, "${data[i].title}", "${data[i].url}", "${data[i].thumbnailUrl}")`
      await db.query(sql)
    }
  })
  .catch(error => {
    console.log(error)
  })