const dataMapperManga = require('../dataMappers/mangaDataMappers')


const mangaController = {
    test: async function(req, res) {
        res.send('every thing is working')
    },
    addManga: async function(req, res){
        try{
            const { name, description } = req.body;

            //validation a faire 

            const newmanga = await dataMapperManga.addMangas(name, description);
            res.json(newmanga)
        }catch(error){
            console.log(error)
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
    }
}

module.exports = mangaController;