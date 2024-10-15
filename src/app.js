const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const express = require('express');
require('dotenv').config({path: '../.env'});


const app = express();
app.use(cors());
const port = process.env.PORT;

const uri = process.env.DB_URI; 
const dbName = process.env.DB_NAME;
const client = new MongoClient(uri);

// Connect to MongoDB once when the server starts
let db;

const connectToMongo = async () => {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

// Fetch athletes data
app.get('/api/sports', async ( req, res) => {
  try {
  const collection = db.collection('sports');
  const items = await collection.find({}).toArray();
  res.json(items)
  } catch (error){
    console.log('Error while fetching', error);
    res.status(500).send('Error Fetching Data')
  }
})
app.get('/api/fictions', async ( req, res) => {
  try {
  const collection = db.collection('fictions');
  const items = await collection.find({}).toArray();
  res.json(items)
  } catch (error){
    console.log('Error while fetching', error);
    res.status(500).send('Error Fetching Data')
  }
})
app.get('/api/celebrities', async ( req, res) => {
  try {
  const collection = db.collection('celebrities');
  const items = await collection.find({}).toArray();
  res.json(items)
  } catch (error){
    console.log('Error while fetching', error);
    res.status(500).send('Error Fetching Data')
  }
})

// Start the server and connect to MongoDB
app.listen(port, async () => {
  await connectToMongo();
  console.log(`Server is running on http://localhost:${port}`);
});
