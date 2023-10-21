import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="bg-gray-200 shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold">{item.year}</h3>
      <p className="text-gray-600">{item.price}</p>
      {/* Add more item details */}
    </div>
  );
};

export default ItemCard;
