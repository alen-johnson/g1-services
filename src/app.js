const express = require('express');
const cors = require('cors');
require('dotenv').config({path: '../.env'});
const { connectToMongo } = require('./config/db');

const sportsRoutes = require('./routes/sports');
const fictionRoutes = require('./routes/fictions');
const celebrityRoutes = require('./routes/celebrities');
const leaderRoutes = require('./routes/leaders');
const housholdROutes = require('./routes/households');


const app = express();
app.use(cors());
const port = process.env.PORT;

app.use(sportsRoutes);
app.use(fictionRoutes);
app.use(celebrityRoutes);
app.use(leaderRoutes);
app.use(housholdROutes);



// Start the server and connect to MongoDB
app.listen(port, async () => {
  await connectToMongo();
  console.log(`Server is running on http://localhost:${port}`);
});
