/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import DashNav from "../app/components/DashNav";

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

function Dashboard() {
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (updateCarData) {
      // Handle update logic here
      try {
        const response = await fetch(`/api/cars/${updateCarData._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (result.success) {
          // Refresh the cars list or update the local state
          alert("Car updated successfully!");
          setUpdateCarData(null); // Reset the update state
        } else {
          alert("Failed to update car.");
        }
      } catch (error) {
        console.error("Failed to update car:", error);
        alert("Failed to update car.");
      }
    } else {
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
    }
  };

  const [showForm, setShowForm] = useState(false);
  const [cars, setCars] = useState<Car[]>([]);
  const [updateCarData, setUpdateCarData] = useState<Car | null>(null);
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

  const handleUpdate = (car: Car) => {
    setUpdateCarData(car);
    setFormData({
      year: car.year.toString(),
      make: car.make,
      model: car.model,
      mileage: car.mileage,
      price: car.price.toString(),
      engine: car.engine,
      transmission: car.transmission,
      fuelType: car.fuelType,
      exteriorColor: car.exteriorColor,
      interiorColor: car.interiorColor,
      imagesUrl: car.imagesUrl,
      description: car.description,
    });
  };

  useEffect(() => {
    if (updateCarData) {
      setShowForm(true);
    }
  }, [updateCarData]);

  const handleDelete = async (carId: string) => {
    // Call your API to delete the car from the database.
    try {
      const response = await fetch(`/api/cars/${carId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete car.");
      }
      const result = await response.json();
      if (result.success) {
        // Refresh the cars list or update the local state
        alert("Car deleted successfully!");
      } else {
        alert("Failed to delete car.");
      }
    } catch (error) {
      console.error("Failed to delete car:", error);
      alert("Failed to delete car.");
    }
  };

  return (
    <div className="relative pt-10">
      <DashNav />
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
            <div className="mt-4 flex justify-between">
              <div className="flex items-center justify-end">
                <button
                  onClick={() => handleUpdate(car)}
                  className="bg-blue-500 text-white p-2 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(car._id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <button
          onClick={() => {
            setUpdateCarData(null);
            setShowForm(!showForm);
          }}
          className="absolute top-12 right-6 bg-slate-600 text-white p-2 rounded"
        >
          {showForm ? "Hide" : "Add New Car"}
        </button>

        {showForm || updateCarData ? (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
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
                      Array.from({ length: 36 }, (_, i) => 1990 + i).map(
                        (year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        )
                      )
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
                    <option value="Petrol">Gas</option>
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
                      setFormData({
                        ...formData,
                        exteriorColor: e.target.value,
                      })
                    }
                    className="mb-4 w-full p-2 border rounded text-slate-800"
                  />
                  <input
                    type="text"
                    placeholder="Interior Color"
                    value={formData.interiorColor}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        interiorColor: e.target.value,
                      })
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
                    className="w-full bg-green-900 text-white p-2 rounded-lg"
                  >
                    {updateCarData ? "Update Car" : "Add Car"}
                  </button>
                  <button
                    onClick={() => {
                      setShowForm(false);
                      setUpdateCarData(null);
                    }}
                    type="button"
                    className="w-full bg-red-900 text-white p-2 rounded-lg mt-3"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Dashboard;
