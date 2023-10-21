/* eslint-disable react/jsx-no-undef */
import React, {useState} from "react";

import Modal from "react-modal";

// Modal.setAppElement("#__next"); // Set the app element for accessibility

const PostCarModal = ({ isOpen, closeModal }) => {
    const [year, setYear] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(""); 
    const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Posting car...");
      const response = await fetch("/api/postCar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ year, make, model, color, description, price, image, status }),
      });

      console.log("Response:", response);

      if (response.ok) {
      console.log("Car posted!");
      // Close the modal and clear form inputs
      closeModal();
      setYear("");
      setMake("");
      setModel("");
      setColor("");
      setDescription("");
      setPrice("");
      setImage("");
      setStatus("");

    } else {
      console.error("Error posting car:");
    }
    } catch (error) {
        console.error("Error posting car:", error);
    }
    }
    
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      appElement={
        typeof window !== "undefined" &&
        window.document.getElementById("__next")
      }
    >
      <div className="items-center justify-center gap-x-6">
        <h2 className="text-gray-800 mb-10 mt-5 ml-5 text-2xl pt-10 underline">
          Create New:
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 grid-cols-4 grid-rows-4">
            <label className="text-black pl-5">
              Year:
              <input
                className="ml-5 rounded-md px-2.5 py-2.5 text-sm font-semibold bg-zinc-100 shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 leading-6 text-gray-900"
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </label>
            <label className="text-black pl-5">
              Make:
              <input
                className="ml-5 rounded-md px-2.5 py-2.5 text-sm font-semibold bg-zinc-100 shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 leading-6 text-gray-900"
                type="text"
                value={make}
                onChange={(e) => setMake(e.target.value)}
              />
            </label>
            <label className="text-black pl-5">
              Model:
              <input
                className="ml-5 rounded-md px-2.5 py-2.5 text-sm font-semibold bg-zinc-100 shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 leading-6 text-gray-900"
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </label>
            <label className="text-black pl-5">
              Color:
              <input
                className="ml-5 rounded-md px-2.5 py-2.5 text-sm font-semibold bg-zinc-100 shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 leading-6 text-gray-900"
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </label>
            <label className="text-black pl-5">
              Description:
              <input
                className="ml-5 rounded-md px-2.5 py-2.5 text-sm font-semibold bg-zinc-100 shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 leading-6 text-gray-900"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label className="text-black pl-5">
              Price:
              <input
                className="ml-5 rounded-md px-2.5 py-2.5 text-sm font-semibold bg-zinc-100 shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 leading-6 text-gray-900"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <label className="text-black pl-5">
              Image:
              <input
                className="ml-5 rounded-md px-2.5 py-2.5 text-sm font-semibold bg-zinc-100 shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 leading-6 text-gray-900"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
            <label className="text-black pl-5">
              Status:
              <input
                className="ml-5 rounded-md px-2.5 py-2.5 text-sm font-semibold bg-zinc-100 shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 leading-6 text-gray-900"
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-row items-center justify-center">
            <button
              className="rounded-md relative items-center mr-5 px-3.5 py-2.5 text-sm font-semibold bg-red-200 shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 leading-6 text-gray-900"
              type="button"
              onClick={closeModal}
            >
              Cancel
            </button>

            <button
              className="rounded-md relative px-3.5 py-2.5 text-sm font-semibold bg-emerald-200 shadow-sm hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 leading-6 text-gray-900"
              type="submit"
              onClick={handleSubmit}
            >
              Post Car
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default PostCarModal;
