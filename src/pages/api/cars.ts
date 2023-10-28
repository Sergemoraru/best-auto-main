import dbConnect from "../../app/utils/dbConnect";
import Car from "../../app/models/Car";
import { NextApiRequest, NextApiResponse } from "next";


dbConnect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method,
    query: { id },
   } = req;

  switch (method) {
    case "POST":
      try {
        const car = await Car.create(req.body);
        res.status(201).json({ success: true, data: car });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "GET":
      try {
        const cars = await Car.find({});
        res.status(200).json({ success: true, data: cars });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
      default:
        res.setHeader("Allow", ["POST", "GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
    }