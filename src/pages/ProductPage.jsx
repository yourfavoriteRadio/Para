import React from "react";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import ProductsSkeleton from "../components/skeletons/ProductsSkeleton";
import ProductModal from "../components/ProductModal";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const addProduct = async (product) => {
    try {
      const res = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const newProduct = await res.json();

      setProducts((prev) => [...prev, newProduct]);
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ProductsSkeleton />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div className="text-center mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Our Products
          </h1>
          <p className="mt-2 text-gray-600">
            Browse our selection of health supplements and skincare essentials
          </p>

        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow font-semibold transition"
        >
          + Add Product
        </button>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => console.log("Add", product)}
            onToggleWishlist={() => console.log("Wishlist", product)}
          />
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <ProductModal
          onClose={() => setShowModal(false)}
          onSubmit={addProduct}
        />
      )}
    </div>
  );
}

export default Products;
