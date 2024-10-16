const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../.env" });

async function deleteAllDocuments() {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri);

  const dbName = process.env.DB_NAME;

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("sports"); // Ensure the collection name is correct

    // Delete all documents from the collection
    const result = await collection.deleteMany({});

    if (result.deletedCount > 0) {
      console.log(`${result.deletedCount} documents were deleted`);
    } else {
      console.log("No documents were deleted. The collection might already be empty.");
    }
  } catch (error) {
    console.error("Error deleting documents:", error);
  } finally {
    await client.close();
    console.log("MongoDB connection closed");
  }
}

deleteAllDocuments().catch(console.error);
