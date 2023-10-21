import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  engine: {
    type: String,
    required: false,
    },
  transmission: {
    type: String,
    required: false,
    },
  fuelType: {
    type: String,
    required: false,
  },
  exteriorColor: {
    type: String,
    required: false,
  },
  interiorColor: {
    type: String,
    required: false,
  },
  imagesURL: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  // Add more fields as needed
});

export default mongoose.models.Car || mongoose.model("Car", CarSchema);
