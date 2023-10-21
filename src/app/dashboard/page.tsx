'use client';
import React, { useState } from "react";

function Dashboard() {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    description: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
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

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Add New Car</h1>
        <form onSubmit={handleSubmit}>
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
            type="number"
            placeholder="Year"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            className="mb-4 w-full p-2 border rounded text-slate-800"
          />
          <input
            type="number"
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
    </div>
  );
}

export default Dashboard;
