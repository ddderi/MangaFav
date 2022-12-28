const db = require('../db_client')


const dataMapperManga = {
    addMangas: async function (name, description, image) {
        try {
            const query = {
                text: `INSERT INTO "mangas" (name, description, image) VALUES ($1, $2, $3) RETURNING *`,
                values: [name, description, image]
            };
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            console.log(error)
        }
    },
    indexMangas: async function () {
        try {
            const query = {
                text: `SELECT *
                       FROM "mangas"`
            };
            const result = await db.query(query);
            return result.rows
        } catch (error) {
            console.log(error)
        }
    },
    deleteManga: async function (id) {
        try {
            const query = {
                text: `DELETE FROM "mangas" 
                WHERE "id" = $1
                RETURNING *`,
                values: [id]
            };
            const result = await db.query(query);
            return result.rows
        } catch (error) {
            console.log(error)
        }
    },
    likeManga: async function (id, likes) {
        try {
            const query = {
                text: `UPDATE "mangas"
                SET "likes" = $2
                WHERE "id" = $1
                RETURNING *`,
                values: [id, likes]
            };
            const result = await db.query(query);
            return result.rows
        } catch (error) {
            console.log(error)
        }
    },
    dislikeManga: async function (id, dislikes) {
        try {
            const query = {
                text: `UPDATE "mangas"
                SET "dislikes" = $2
                WHERE "id" = $1
                RETURNING *`,
                values: [id, dislikes]
            };
            const result = await db.query(query);
            return result.rows
        } catch (error) {
            console.log(error)
        }

    }
}


module.exports = dataMapperManga;