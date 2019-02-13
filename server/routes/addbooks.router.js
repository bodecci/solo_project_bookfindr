const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// router.post('/', (req, res) => {
//     if(req.isAuthenticated()){
//     const newBook = req.body;
//     const queryText = `INSERT INTO ( )
//                     VALUES ( ) `;
    
//     }
// });

router.get('/', (req, res) => {
    if(req.isAuthenticated()) {
        pool.query(`SELECT "books"."title" AS "Book Title", "author"."name" 
                    AS "Author Name", "category"."type" AS "Category" 
	                FROM "books" JOIN "author" ON ("books"."author_id" = "author"."id") 
                    JOIN "category" ON ("category"."id" = "books"."category_id") 
                    ;`
                    )
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


module.exports = router;