import React, { useState } from "react";

function ProductModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    oldPrice: "",
    rating: 5,
    reviews: 0,
    discount: 0,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      price: Number(formData.price),
      oldPrice: Number(formData.oldPrice),
      rating: Number(formData.rating),
      reviews: Number(formData.reviews),
      discount: Number(formData.discount),
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Add Product</h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Name
            </label>

            <input
              name="name"
              placeholder="Enter product name"
              className="w-full border rounded-lg p-2"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>

            <textarea
              name="description"
              placeholder="Enter product description"
              rows="3"
              className="w-full border rounded-lg p-2"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Image URL
            </label>

            <input
              name="image"
              placeholder="https://..."
              className="w-full border rounded-lg p-2"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>

          {/* Pricing */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">
              Pricing
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="block text-sm font-medium mb-1">
                  Current Price
                </label>

                <input
                  name="price"
                  type="number"
                  placeholder="0.00"
                  className="w-full border rounded-lg p-2"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Old Price
                </label>

                <input
                  name="oldPrice"
                  type="number"
                  placeholder="0.00"
                  className="w-full border rounded-lg p-2"
                  value={formData.oldPrice}
                  onChange={handleChange}
                />
              </div>

            </div>
          </div>

          {/* Product Information */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">
              Product Information
            </h3>

            <div className="grid grid-cols-3 gap-4">

              <div>
                <label className="block text-sm font-medium mb-1">
                  Rating
                </label>

                <input
                  name="rating"
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  placeholder="5.0"
                  className="w-full border rounded-lg p-2"
                  value={formData.rating}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Reviews
                </label>

                <input
                  name="reviews"
                  type="number"
                  placeholder="0"
                  className="w-full border rounded-lg p-2"
                  value={formData.reviews}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Discount (%)
                </label>

                <input
                  name="discount"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0"
                  className="w-full border rounded-lg p-2"
                  value={formData.discount}
                  onChange={handleChange}
                />
              </div>

            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Add Product
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default ProductModal;