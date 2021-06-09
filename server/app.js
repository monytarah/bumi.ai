const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello')
})

app.use(routes)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app