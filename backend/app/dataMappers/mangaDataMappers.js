const db = require('../db_client')


const dataMapperManga = {
    addMangas: async function(name, description){
        try{
            const query = {
                text: `INSERT INTO "mangas" (name, description) VALUES ($1, $2) RETURNING *`,
                values: [name, description]
            };
            const result = await db.query(query);
            return result.rows;
        }catch(error){
            console.log(error)
        }
    },
    indexMangas: async function(){
        try{
            const query = {
                text: `SELECT *
                       FROM "mangas"`
            };
            const result = await db.query(query);
            return result.rows
        }catch(error){
            console.log(error)
        }
    },
    deleteManga: async function(id){
        try{
            const query = {
                text: `DELETE FROM "mangas" 
                WHERE "id" = $1`,
                values: [id]
            };
            const result = await db.query(query);
            return result.rows
        }catch(error){
            console.log(error)
        }
    },
    updateManga: async function(name, description, id){
        try{
            const query = {
                text: `UPDATE "mangas"
                SET "name" = $1, "description" = $2
                WHERE "id" = $3`,
                values: [name, description, id]
            };
            const result = await db.query(query);
            return result.rows
        }catch(error){
            console.log(error)
        }
    },
    upvoteManga: async function(id){
        try{
            const query = {
                text: `UPDATE "mangas"
                SET "votes" = "votes" + 1
                WHERE "id" = $1`,
                values: [id]
            };
            const result = await db.query(query);
            return result.rows
        }catch(error){
            console.log(error)
        }
    }
}


module.exports = dataMapperManga;