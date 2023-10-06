import { ConnectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, pass } = req.body;

    try {
      const client = await ConnectToDatabase();
      const db = client.db("Transport");

      const user = await db
        .collection("Users")
        .findOne({ Email: email, Password: pass });

      if (user) {
        res.status(200).json(user);
      } else {
        res.status(405).json({ msg: "No user found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server Error" + error.message });
    }
  } else {
    res.status(405).json({ msg: "Method Not Allowed" });
  }
}
