import { ConnectToDatabase } from "../../util/mongodb";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const { from, to } = req.query;
    try {
      const client = await ConnectToDatabase();
      const db = client.db("Transport");
      const data = await db
        .collection("Buses")
        .find({ $and: [{ Via: from, Via: to }] })
        .toArray();
      if (data.length !== 0) {
        res.status(200).json(data);
      } else {
        res.status(405).json({ msg: "No such data found" });
      }
    } catch (error) {
      res.status(405).json({
        msg: error.message,
      });
    }
  } else {
    res.status(405).json({ msg: "Invalid method" });
  }
}
