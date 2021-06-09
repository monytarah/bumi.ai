const PhotoController = require('../controllers/PhotoController')
const router = require('express').Router()

router.get('/photos', PhotoController.fetchPhotos)
router.get('/photos/:id', PhotoController.findById)
router.post('/photos', PhotoController.addPhoto)
router.put('/photos/:id', PhotoController.updateById)
router.delete('/photos/:id', PhotoController.deleteById)

module.exports = router