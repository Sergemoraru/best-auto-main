// pages/api/postCar.js
import prisma from "../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { year, make, model, color, description, price, image, status } = req.body;
    
    try {
      // Create a new car entry in the database using Prisma
      const newCar = await prisma.car.create({
        data: {
          year,
          make,
          model,
          color,
          description,
          price,
          image,
          status,
        },
      });

      return res.status(201).json(newCar);
    } catch (error) {
      console.error("Error posting car:", error);
      return res.status(500).json({ error: "Error posting car" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
