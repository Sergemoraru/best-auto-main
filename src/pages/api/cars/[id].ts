import dbConnect from "../../../app/utils/dbConnect";
import Car from "../../../app/models/Car";
import { NextApiRequest, NextApiResponse } from "next";


dbConnect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { 
    method,
    query: { id },
   } = req;

  switch (method) {
    case "PUT":
      try {
        const car = await Car.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!car) {
          return res
            .status(404)
            .json({ success: false, message: "Car not found" });
        }
        res.status(200).json({ success: true, data: car });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedCar = await Car.deleteOne({ _id: req.query.id });
        if (!deletedCar.deletedCount) {
          return res
            .status(404)
            .json({ success: false, message: "Car not found" });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
