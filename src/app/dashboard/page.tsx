/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";

function Dashboard() {
  const [formData, setFormData] = useState({
    year: "",
    make: "",
    model: "",
    mileage: "",
    price: "",
    engine: "",
    transmission: "",
    fuelType: "",
    exteriorColor: "",
    interiorColor: "",
    imagesUrl: "",
    description: "",
  });
    
 type Car = {
   year: number;
   make: string;
   model: string;
   mileage: string;
   price: number;
   engine: string;
   transmission: string;
   fuelType: string;
   exteriorColor: string;
   interiorColor: string;
   imagesUrl: string;
   description: string;
   _id: string;
 };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch("/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      alert("Car added successfully!");
      // Reset form or navigate somewhere else
    } else {
      alert("Failed to add car.");
    }
  };

  const [showForm, setShowForm] = useState(false);
  const [cars, setCars] = useState<Car[]>([]);

 useEffect(() => {
   const fetchCars = async () => {
     try {
       const response = await fetch("/api/cars");
       const result = await response.json();
       if (response.ok) {
         setCars(result.data);
       }
     } catch (error) {
       console.error("Failed to fetch cars:", error);
     }
   };

   fetchCars();
 }, []);


  return (
    <div>
      <div className="car-list mt-4 space-y-4">
        {cars.map((car) => (
          <div
            key={car._id}
            className="car-item p-4 border rounded shadow-md bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">
              {car.make || "N/A"} {car.model || "N/A"}
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <p>Year: {car.year || "N/A"}</p>
              <p>Mileage: {car.mileage || "N/A"}</p>
              <p>Engine: {car.engine || "N/A"}</p>
              <p>Transmission: {car.transmission || "N/A"}</p>
              <p>Fuel Type: {car.fuelType || "N/A"}</p>
              <p>Exterior Color: {car.exteriorColor || "N/A"}</p>
              <p>Interior Color: {car.interiorColor || "N/A"}</p>
            </div>
            <p className="mt-2">
              Price: ${car.price ? car.price.toFixed(2) : "N/A"}
            </p>
            {car.imagesUrl ? (
              <img
                src={car.imagesUrl}
                alt={`${car.make || "N/A"} ${car.model || "N/A"}`}
                className="mt-2 w-full h-56 object-cover rounded"
              />
            ) : (
              <p className="mt-2">Image: N/A</p>
            )}
            <p className="mt-2 text-gray-600">{car.description || "N/A"}</p>
          </div>
        ))}
      </div>
      <div className="min-h-screen bg-gray-100 p-6 flex items-start justify-end">
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-4 bg-slate-600 text-white p-2 rounded"
        >
          {showForm ? "Hide" : "Add Car"}
        </button>
        {showForm && (
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-2xl font-bold mb-4 text-slate-800">
              Add New Car
            </h1>
            <form onSubmit={handleSubmit}>
              <select
                value={formData.year}
                onChange={(e) =>
                  setFormData({ ...formData, year: e.target.value })
                }
                className="mb-4 w-full p-2 border rounded text-slate-800"
              >
                <option value="" disabled>
                  Select Year
                </option>
                {
                  // Generate options for each year from 1990 to 2025
                  Array.from({ length: 36 }, (_, i) => 1990 + i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))
                }
              </select>
              <input
                type="text"
                placeholder="Make"
                value={formData.make}
                onChange={(e) =>
                  setFormData({ ...formData, make: e.target.value })
                }
                className="mb-4 w-full p-2 border rounded text-slate-800"
              />
              <input
                type="text"
                placeholder="Model"
                value={formData.model}
                onChange={(e) =>
                  setFormData({ ...formData, model: e.target.value })
                }
                className="mb-4 w-full p-2 border rounded text-slate-800"
              />
              <input
                type="text"
                placeholder="Mileage"
                value={formData.mileage}
                onChange={(e) =>
                  setFormData({ ...formData, mileage: e.target.value })
                }
                className="mb-4 w-full p-2 border rounded text-slate-800"
              />
              <input
                type="text"
                placeholder="Engine"
                value={formData.engine}
                onChange={(e) =>
                  setFormData({ ...formData, engine: e.target.value })
                }
                className="mb-4 w-full p-2 border rounded text-slate-800"
              />
              <input
                type="text"
                placeholder="Transmission"
                value={formData.transmission}
                onChange={(e) =>
                  setFormData({ ...formData, transmission: e.target.value })
                }
                className="mb-4 w-full p-2 border rounded text-slate-800"
              />
              <select
                value={formData.fuelType}
                onChange={(e) =>
                  setFormData({ ...formData, fuelType: e.target.value })
                }
                className="mb-4 w-full p-2 border rounded text-slate-800"
              >
                <option value="" disabled>
                  Select Fuel Type
                </option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
                {/* Add more options as needed */}
              </select>
              <input
                type="text"
                placeholder="Exterior Color"
                value={formData.exteriorColor}
                onChange={(e) =>
                  setFormData({ ...formData, exteriorColor: e.target.value })
                }
                className="mb-4 w-full p-2 border rounded text-slate-800"
              />
              <input
                type="text"
                placeholder="Interior Color"
                value={formData.interiorColor}
                onChange={(e) =>
                  setFormData({ ...formData, interiorColor: e.target.value })
                }
                className="mb-4 w-full p-2 border rounded text-slate-800"
              />
              <input
                type="text"
                placeholder="Images URL"
                value={formData.imagesUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imagesUrl: e.target.value })
                }
                className="mb-4 w-full p-2 border rounded text-slate-800"
              />
              <input
                type="number"
                step="0.01"
                placeholder="Price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="mb-4 w-full p-2 border rounded text-slate-800"
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="mb-4 w-full p-2 border rounded text-slate-800"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded"
              >
                Add Car
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}


export default Dashboard;
