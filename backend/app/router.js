const express = require('express');
const router = express.Router();
const mangaController = require('./controllers/mangaController')


router.post('/manga', mangaController.addManga)
router.get('/mangas', mangaController.indexM)
router.delete('/mangas/:id', mangaController.deleteManga)
router.put('/manga/:id', mangaController.updateManga)

module.exports = router;