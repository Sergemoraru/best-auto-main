// import prisma from "../../../lib/prisma"

// export default async function handler(req, res) {
//   if (req.method !== "GET") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     const items = await prisma.item.findMany(); // Fetch items from the database
//     return res.status(200).json(items);
//   } 
//   catch (error) {
//     return res.status(500).json({ message: "Error fetching data" });
//   }
// }
