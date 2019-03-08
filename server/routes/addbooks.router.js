const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', async (req, res) => {
    if(req.isAuthenticated()){
        const client = await pool.connect();
        const newBook = req.body;
        console.log('NewBook: ', newBook);
        
        try{
            await client.query('BEGIN');
            const firstInsert = `INSERT INTO "category" ("type")
                                VALUES ($1) RETURNING "id";`;
            const firstResult = await client.query(firstInsert,[newBook.category]);
            const categoryId = firstResult.rows[0].id;
            const secondInsert = `INSERT INTO "author" ("name") VALUES ($1)
                                RETURNING "id";`;
            const secondResult = await client.query(secondInsert, [newBook.author]);
            const secondId = secondResult.rows[0].id;

            const lastInsert = `INSERT INTO "books" ("ISBN", "person_id", 
                                "category_id", "title", "author_id")
                                VALUES ($1, $2, $3, $4, $5);`
            await client.query(lastInsert, [newBook.ISBN, req.user.id,
                                            categoryId, newBook.title, secondId]);
            await client.query('COMMIT') // commits all the inserts into the database
            res.sendStatus(201);
        } catch (error) {
            console.log('Error in POST: ', error);
            await client.query('ROLLBACK'); // if an error occurs, undo the earlier inserts
            res.sendStatus(500);
        }
        finally {
            client.release()
        }
    }
});

router.get('/', (req, res) => {
    if(req.isAuthenticated()) {
        pool.query(`SELECT "books"."id" AS "ID", "books"."title" AS "Book_Title", 
                    "author"."name" AS "Author_Name", "category"."type" AS "Category" 
	                FROM "books" JOIN "author" ON ("books"."author_id" = "author"."id") 
                    JOIN "category" ON ("category"."id" = "books"."category_id") 
                    WHERE "person_id" = $1
                    ;`,[req.user.id])
                    .then((result) => {
                        res.send(result.rows);
                    }).catch((error) => {
                        console.log('Error in GET route: ', error);
                        res.sendStatus(500);
                    });
    } else {
        res.sendStatus(403);
    }
});

router.get('/search/:bookSearch', (req, res) => {
    if(req.isAuthenticated()) {
        const queryTerm = (req.params.bookSearch);
        console.log('bookSearch :', queryTerm);
        console.log(req.user.id);
        
        
        pool.query(`SELECT "books"."title", "books"."ISBN", "author"."name" FROM "books" 
	                JOIN "author" ON "books"."author_id" = "author"."id"
                    WHERE "books"."title" 
                    ILIKE '%' || $1 || '%' AND "person_id" = $2;`, [queryTerm, req.user.id])
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET for search: ', error);
        res.sendStatus(500);
        });
    } else {
        res.sendStatus(403)
    }
});



router.delete('/:id', (req, res) => {
    console.log('req.params: ', req.params);
    const queryText = `DELETE FROM "books" WHERE id=$1;`;
    pool.query(queryText, [req.params.id]).then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in Delete route: ', error);
        res.sendStatus(500);
    });
});

router.put('/:id', async (req, res) => {
    if(req.isAuthenticated){
        const client = await pool.connect();
        const updateBook = req.body;
        const updateId = req.params.id;
        console.log('updateBook', req.body);
        console.log('updateID, ', updateId);
        


        try {
            await client.query('BEGIN');
            const firstUpdate =`UPDATE "books" SET "title" = $1
                                WHERE "id" = $2;`;
            const firstResult = await client.query(firstUpdate, [updateBook.title,updateId]);
            // const categoryId = firstResult.rows[0].id;
            // const secondUpdate = `UPDATE "author" SET "author"."name" = $1
            //                       WHERE "id" = $2;`;
            // await client.query(secondUpdate, [updateBook.author, categoryId]);
            // await client.query('COMMIT') // commits all the inserts into the database
            res.sendStatus(201);
        } catch (error) {
            console.log('Error in POST: ', error);
            await client.query('ROLLBACK'); // if an error occurs, undo the earlier inserts
            res.sendStatus(500);
        } finally {
            client.release()
        }
       

    }
    
});





module.exports = router;