const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
const port = 5000;

const uri = 'mongodb+srv://admin:admin123@cluster0-data.sqm3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-data'; // Replace with your MongoDB URI
const client = new MongoClient(uri);

// Connect to MongoDB once when the server starts
let db;

const connectToMongo = async () => {
  try {
    await client.connect();
    db = client.db('gamedata');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

// Fetch athletes data
app.get('/api/athletes', async (req, res) => {
  try {
    const collection = db.collection('athletes');
    const items = await collection.find({}).toArray();
    res.json(items);
  } catch (error) {
    console.log('Error while fetching:', error);
    res.status(500).send('Error Fetching Data');
  }
});

// Start the server and connect to MongoDB
app.listen(port, async () => {
  await connectToMongo();
  console.log(`Server is running on http://localhost:${port}`);
});
