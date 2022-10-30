const express = require('express');
const router = express.Router();
const mangaController = require('./controllers/mangaController')
// const adminInit = require('../index')

const admin = require("firebase-admin")
const credentials = require("../testfirebase.json")

const adminInit = admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

router.post('/manga', mangaController.addManga)
router.get('/mangas', mangaController.indexM)
router.delete('/mangas/:id', mangaController.deleteManga)
router.put('/manga/:id', mangaController.updateManga)
router.patch('/manga/:id', mangaController.upvoteManga)

router.post('/signup', async (req, res) => {
    const userResponse = await adminInit.auth().createUser({
        email: req.body.email,
        password: req.body.password,
        emailVerified: false,
        disabled: false
    });
    res.json(userResponse)
})

module.exports = router;