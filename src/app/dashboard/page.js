"use client";
import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import PostCarModal from "../components/PostCarModal";

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-zinc-600">
      <h1 className="text-2xl">Cars in Database</h1>
      {items.length === 0 ? (
        <p>No cars available.</p>
      ) :  (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.year} - {item.price} - {item.make} - {item.model} - {item.mileage} - {item.color} - {item.transmission} - {item.fuel} - {item.engine} - {item.drive} - {item.body} - {item.interior} - {item.vin} - {item.description} - {item.image}
            </li>
          ))}
        </ul>
      )}
        <button onClick={openModal}>Post Car</button>
        <PostCarModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Dashboard;
