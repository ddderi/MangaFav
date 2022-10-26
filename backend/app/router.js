const express = require('express');
const router = express.Router();
const mangaController = require('./controllers/mangaController')

router.get('/', mangaController.test)
router.post('/manga', mangaController.addManga)
router.get('/mangas', mangaController.indexM)
router.delete('/mangas/:id', mangaController.deleteManga)

module.exports = router;