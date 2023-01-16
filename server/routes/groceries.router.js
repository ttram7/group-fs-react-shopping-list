const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Setup a GET route 
router.get('/', (req, res) => {
    // Fetch all things in these GET routes
    // sort by order 
    const sqlText = `SELECT * FROM groceries ORDER BY purchased, name;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
})


// Setup a POST route
router.post('/', (req, res) => {
    const groceryItem = req.body;
    const purchaseStatus = 'NO'
    const sqlText = `INSERT INTO groceries (name, quantity, unit, purchased)
                     VALUES ($1, $2, $3, $4)`;
    // sanitize inputs
    pool.query(sqlText, [groceryItem.name, groceryItem.quantity, groceryItem.unit, purchaseStatus])
        .then((result) => {
            console.log(`Added grocery item to the database`, groceryItem);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
})

router.delete('/:id', (req, res) => {
    console.log('in Delete with req.params.id, ', req.params.id)
    const groceryItemId = req.params.id; 
    const queryText = `DELETE FROM "groceries" WHERE "id" = $1`;
    pool.query(queryText, [groceryItemId])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
    console.log('in PUT request with item id: ', req.params.id);
    
    const queryText = `UPDATE "groceries" SET "purchased"='YES' WHERE "id"=$1;`;
    
    pool.query(queryText, [req.params.id])
    .then((dbResponse) => {
        console.log('dbResponse: ', dbResponse);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
})


module.exports = router;