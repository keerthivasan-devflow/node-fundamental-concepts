const { MongoClient } = require("mongodb");

const URL =
  "mongodb+srv://keerthivasan:1kRvsCPcobjXmizm@nodestore.psrbupi.mongodb.net/";

const client = new MongoClient(URL);
const database = "experiment";

async function main() {
  await client.connect(); // Use connect method to connect to the server
  console.log("Connected successfully to server");

  const db = client.db(database);
  const collection = db.collection("users");

  const result = await collection.find({}).toArray();
  console.log(result);

  const count = await collection.countDocuments();
  console.log("Documents Count - ", count);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
