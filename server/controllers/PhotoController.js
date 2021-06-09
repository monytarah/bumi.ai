const Photo = require('../models/Photo')

class PhotoController {
  static fetchPhotos (req, res) {
    Photo.fetchPhotos((err, data)  => {
      if (err) {
        return res.status(500).json(err)
      } else {
        return res.status(200).json(data)
      }
    })
  }

  static findById (req, res) {
    let id = +req.params.id
    Photo.findById(id, (err, data) => {
      if (err) {
        return res.status(500).json(err)
      } else {
        return res.status(200).json(data)
      }
    })
  }

  static addPhoto(req, res) {
    Photo.addPhoto(req.body, (err, message) => {
      if (err) {
        return res.status(500).json(err)
      } else {
        return res.status(201).json(message)
      }
    })
  }

  static updateById (req, res) {
    let id = +req.params.id
    Photo.updateById(req.body, id, (err, message) => {
      if (err) {
        if (err.message) {
          return res.status(404).json(err)
        }
        return res.status(500).json(err)
      } else {
        return res.status(200).json(message)
      }
    })
  }

  static deleteById(req, res) {
    let id = +req.params.id
    Photo.deleteById(id, (err, message) => {
      if (err) {
        if (err.message) {
          return res.status(404).json(err)
        }
        return res.status(500).json(err)
      } else {
        return res.status(200).json(message)
      }
    })
  }
}

module.exports = PhotoController