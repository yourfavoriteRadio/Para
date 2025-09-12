import React from "react";
import {
    ShoppingCartIcon,
    HeartIcon,
    StarIcon,
} from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({ product, onToggleWishlist }) {
    const dispatch = useDispatch();
    const hasDiscount = product.discount > 0;
    const discountedPrice = hasDiscount
        ? (product.price * (1 - product.discount / 100)).toFixed(2)
        : product.price.toFixed(2);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<StarIcon key={i} className="h-4 w-4 text-yellow-400" />);
            } else {
                stars.push(<StarOutline key={i} className="h-4 w-4 text-gray-300" />);
            }
        }
        return stars;
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-3 relative flex flex-col transition text-sm hover:shadow-lg hover:bg-blue-50">
            {/* Product image with discount badge */}
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-contain rounded-md bg-gray-50"
                />
                {hasDiscount && (
                    <span className="absolute top-2 left-2 bg-red-500/90 text-white text-xs font-bold px-2 py-1 rounded">
                        -{product.discount}%
                    </span>
                )}
            </div>

            {/* Product info */}
            <h2 className="mt-2 text-sm font-semibold text-gray-900 line-clamp-2">
                {product.name}
            </h2>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-1">
                {renderStars(product.rating)}
                <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="mt-2 flex items-center gap-2">
                <span className="text-base font-bold text-blue-700">
                    ${discountedPrice}
                </span>
                {hasDiscount && (
                    <span className="text-xs text-gray-400 line-through">
                        ${product.price.toFixed(2)}
                    </span>
                )}
            </div>

            {/* Buttons */}
            <div className="mt-auto flex justify-between items-center pt-2">
                <button
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
                    onClick={() => onToggleWishlist(product)}
                >
                    <HeartIcon className="h-5 w-5" />
                </button>
                <button
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-400 text-white text-xs px-3.5 py-1.5 rounded-lg"
                     onClick={() => dispatch(addToCart(product))}
                >
                    <ShoppingCartIcon className="h-4 w-4" />
                    Add
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
