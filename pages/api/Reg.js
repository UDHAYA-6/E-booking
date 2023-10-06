import { ConnectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, pass } = req.body;
    try {
      const client = await ConnectToDatabase();
      const db = client.db("Transport");
      const data = await db.collection("Users").findOne({ Email: email });
      if (data) {
        res.status(405).json({ msg: "User already found" });
      } else {
        await db
          .collection("Users")
          .insertOne({ Name: name, Email: email, Password: pass });
        res.status(200).json({ msg: "Successfully registered" });
      }
    } catch (error) {
      res.status(405).json({ msg: "Failed to register" });
    }
  }
}
