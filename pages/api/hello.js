import clientPromise from "@/utils/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("food-order");

  if (req.method === "GET") {
    let myFoods = await db.collection("food-order").find({}).toArray();
    res.json({ status: 200, data: myFoods });
  }
}

// export default function handler(req, res) {
//   res.status(200).json({ name: "Vahap Cano" });
// }
