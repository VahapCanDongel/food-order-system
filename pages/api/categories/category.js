import clientPromise from "@/utils/mongodb";

export default async function hanlder(res, req) {
  const client = await clientPromise;
  const db = client.db("food-order");

  if (req.method === "GET") {
    let myFoods = await db
      .collection("food-order")
      .find("categoriess")
      .toArray();
    res.json({ status: 200, data: myFoods });
  }
}
