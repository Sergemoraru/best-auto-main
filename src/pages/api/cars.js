import dbConnect from "../../app/utils/dbConnect";
import Car from "../../app/models/Car";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

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
        res.status(400).json({ success: false });
        break;
    // Handle other methods like GET, PUT, DELETE
  }
}
