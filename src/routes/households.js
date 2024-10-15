const express = require('express');
const router = express.Router();
const { getDb } = require('../config/db');

router.get('/api/households', async (req, res) => {
  try {
    const collection = getDb().collection('households');
    const items = await collection.find({}).toArray();
    res.json(items);
  } catch (error) {
    console.error('Error while fetching:', error);
    res.status(500).send('Error Fetching Data');
  }
});

module.exports = router;
