const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../.env" });

async function insertDocuments() {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri);

  let count = 0;
  const dbName = process.env.DB_NAME;

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("sports"); // Replace with your collection name

    //insert data to be inserted in the below array
    const data = [
    
    ];

    for (const name of data) {
      const existing = await collection.findOne({ name: name });

      if (existing) {
        console.log(`"${name}" exists`);
        count += 1;
      } else {
        const result = await collection.insertOne({ name: name });
        console.log(` "${name}" documents were inserted`);
      }
    }
  } finally {
    console.log(`${count}`);
    await client.close();
  }
}

insertDocuments().catch(console.error);
