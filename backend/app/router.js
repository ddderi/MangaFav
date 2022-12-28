const express = require('express');
const router = express.Router();
const mangaController = require('./controllers/mangaController')


router.post('/manga', mangaController.addManga)
router.get('/mangas', mangaController.indexM)
router.delete('/mangas/:id', mangaController.deleteManga)
router.put('/mangaslikes/:id', mangaController.likeManga)
router.put('/mangasdislikes/:id', mangaController.dislikeManga)

module.exports = router;