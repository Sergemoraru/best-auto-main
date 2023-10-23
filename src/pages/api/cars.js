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
    case "PUT":
      try {
        const car = await Car.findByIdAndUpdate(req.body.id, req.body, {
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
        const deletedCar = await Car.deleteOne({ _id: req.body.id });
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
      res.status(400).json({ success: false });
      break;
  }
}
