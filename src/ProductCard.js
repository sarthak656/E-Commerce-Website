import React from "react";

const ProductCard = ({ product }) => (
  <div className="border p-4 rounded shadow hover:shadow-lg">
    <img
      src={product.Image || "https://via.placeholder.com/150"}
      alt={product.ProductName}
      className="w-full h-32 object-cover mb-4"
    />
    <h3 className="text-lg font-bold">{product.ProductName}</h3>
    <p className="text-sm text-gray-600">Category: {product.Category}</p>
    <p className="text-sm text-gray-800 font-semibold">${product.Price}</p>
  </div>
);

export default ProductCard;
