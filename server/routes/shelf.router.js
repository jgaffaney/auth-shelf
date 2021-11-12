const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {

  const queryText = `
    SELECT * FROM "item";
  `;

  pool.query(queryText)
    .then((response) => {
      res.send(response.rows)
    }).catch((err) => {
      console.log(`ERROR w/ shelf GET`, err);
      res.sendStatus(500);
    })
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.user.id
  const queryText = `
  SELECT * FROM "item"
  WHERE "user_id" = $1;
  `
  pool.query(queryText, [id])
      .then(response => {
        res.send(response.rows)
      }).catch (err => {
        console.log('Error on user GET: ', err);
        res.sendStatus(500);
      })
})

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  const item = req.body;
  const queryText = `
  INSERT INTO item("description", "image_url", "user_id")
  VALUES($1, $2, $3);
  `;
  const values = [item.description, item.image_url, req.user.id]
  pool.query(queryText, values)
      .then(response => {
        res.sendStatus(201);
      }).catch(err => {
        console.log('Error on post: ', err);
        res.sendStatus(500);
})})

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  let itemId = req.params.id;
  let userId = req.user.id;


  const queryText = `
    DELETE FROM "item"
    WHERE "id" = $1
    AND "user_id" = $2;
  `;

  const values = [itemId, userId];

  pool.query(queryText, values)
    .then((result) => {
      console.log(`Delete Successful!`);
      res.sendStatus(200);
    }).catch((err) => {
      console.log(`/shelf delete error!`, err);
      res.sendStatus(500);
    })

});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  const item = req.body.item;
  let itemId = req.params.id;



  const queryText = `
  UPDATE "item" SET 
  "description"= $1,
  "image_url" = $2
  WHERE "id" = $3;
  `;

  const values = [item.description, item.image_url, itemId]

  pool.query(queryText, values)
  .then((result) => {
    console.log('Update Successful!');
    res.sendStatus(200);    
  }).catch((err) => {
    console.log('/shelf update error', err);
    res.sendStatus(500);
  })
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
