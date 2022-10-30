const dataMapperManga = require('../dataMappers/mangaDataMappers')


const mangaController = {
    addManga: async function(req, res){
        try{
            const { name, description } = req.body;

            //validation a faire 


            const newmanga = await dataMapperManga.addMangas(name, description);
            res.json(newmanga)
        }catch(error){
            return res.status(500).json({ error })
        }
    },
    indexM: async function(req, res){
        try{
            const mangas = await dataMapperManga.indexMangas();
            res.json(mangas)
        }catch(error){
            return res.status(500).json({ error })
        }
    },
    deleteManga: async function(req, res){
        try{
            const { id } = req.params;
            console.log(req.params)
            const mangas = await dataMapperManga.deleteManga(id);
            res.json(mangas)
        }catch(error){
            return res.status(500).json({ error })
        }
    },
    updateManga: async function(req, res){
        try{
            const { name, description } = req.body
            const { id } = req.params
            const manga = await dataMapperManga.updateManga(name, description, id)
            res.json(manga)
        }catch(error){
            return res.status(500).json({ error })
        }
    },
    upvoteManga: async function(req, res){
        try{
            const { id } = req.params
            const manga = await dataMapperManga.upvoteManga(id)
            res.json(manga)
        }catch(error){
            return res.status(500).json({ error })
        }
    }
}

module.exports = mangaController;