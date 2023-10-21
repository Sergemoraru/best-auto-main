"use client";
import React, { useState } from "react";

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

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-end">
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 bg-slate-600 text-white p-2 rounded"
      >
        {showForm ? "Hide" : "Add Car"}
      </button>
      {showForm && (
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-slate-800">Add New Car</h1>
        <form onSubmit={handleSubmit}>
          <select
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
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
            onChange={(e) => setFormData({ ...formData, make: e.target.value })}
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
  );
}

export default Dashboard;
