const dataMapperManga = require('../dataMappers/mangaDataMappers')


const mangaController = {
    addManga: async function (req, res) {
        try {
            const { name, description, image } = req.body;

            //validation a faire 


            const newmanga = await dataMapperManga.addMangas(name, description, image);
            res.json(newmanga)
        } catch (error) {
            console.log(error)
        }
    },
    indexM: async function (req, res) {
        try {
            const mangas = await dataMapperManga.indexMangas();
            res.json(mangas)
        } catch (error) {
            return res.status(500).json({ error })
        }
    },
    deleteManga: async function (req, res) {
        try {
            const { id } = req.params;
            console.log(req.params)
            const mangas = await dataMapperManga.deleteManga(id);
            res.json(mangas)
        } catch (error) {
            return res.status(500).json({ error })
        }
    },
    likeManga: async function (req, res) {
        try {
            const { id } = req.params;
            const { likes } = req.body;
            const mangas = await dataMapperManga.likeManga(id, likes);
            res.status(200).json(mangas)
        } catch (error) {
            return res.status(500).json({ error })
        }
    },
    dislikeManga: async function (req, res) {
        try {
            const { id } = req.params;
            const { dislikes } = req.body;
            const mangas = await dataMapperManga.dislikeManga(id, dislikes);
            res.status(200).json(mangas)
        } catch (error) {
            return res.status(500).json({ error })
        }
    }

}

module.exports = mangaController;