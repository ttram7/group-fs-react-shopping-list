const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Setup a GET route 
router.get('/', (req, res) => {
    // Fetch all things in these GET routes
    // sort by order 
    const sqlText = `SELECT * FROM groceries ORDER BY name;`;
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
    const sqlText = `INSERT INTO groceries (name, quantity, unit)
                     VALUES ($1, $2, $3)`;
    // sanitize inputs
    pool.query(sqlText, [groceryItem.name, groceryItem.quantity, groceryItem.unit])
        .then((result) => {
            console.log(`Added grocery item to the database`, groceryItem);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
})


module.exports = router;