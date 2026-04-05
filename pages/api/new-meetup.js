import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      console.log("API HIT");

      const client = await MongoClient.connect(
        "mongodb+srv://avicodesmith_db_user:A4ebsIAF7pEUaLoa@cluster0.bvq1vp5.mongodb.net/meetups?retryWrites=true&w=majority&authSource=admin",
      );

      const db = client.db();
      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup inserted!" });
    } catch (error) {
      console.error("ERROR:", error);

      res.status(500).json({ message: "Something went wrong" });
    }
  }
}
