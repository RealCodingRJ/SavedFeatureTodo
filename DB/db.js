import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

export async function getDB(name) {
  try {
    const db = client.db("app");
    const coll = db.collection("app");

    const main = {
      todo: name,
      age: 24,
    };

    let result = await coll.insertOne(main);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

// console.log(apped);
