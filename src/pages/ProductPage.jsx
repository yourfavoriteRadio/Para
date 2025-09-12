import React from "react";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import ProductsSkeleton from "../components/skeletons/ProductsSkeleton";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
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
      <div className="text-center mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Our Products
        </h1>
        <p className="mt-2 text-gray-600">
          Browse our selection of health supplements and skincare essentials
        </p>
        <div className="mt-4 w-40 h-1 bg-blue-600 mx-auto rounded"></div>
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
    </div>
  );
}

export default Products;
