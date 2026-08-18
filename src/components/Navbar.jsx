import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BellIcon,
  UserCircleIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import NavbarCart from "./NavBarCart";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <HeartIcon className="h-7 w-7 text-blue-300" />
            <Link to="/" className="text-xl font-bold">
              <span className="text-blue-300">Ghassen</span> Para
            </Link>
          </div>

          {/* Search Bar (desktop only) */}
          <div className="hidden md:flex flex-1 mx-6">
            <div className="relative w-full">
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-md bg-blue-800 pl-10 pr-3 py-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex space-x-6">
            <Link
              to="/"
              className="px-3 py-2 rounded-md hover:bg-blue-800 hover:text-blue-200"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="px-3 py-2 rounded-md hover:bg-blue-800 hover:text-blue-200"
            >
              Products
            </Link>
            <Link
              to="/promotions"
              className="px-3 py-2 rounded-md hover:bg-blue-800 hover:text-blue-200"
            >
              Promotions
            </Link>
            <Link
              to="/blog"
              className="px-3 py-2 rounded-md hover:bg-blue-800 hover:text-blue-200"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-md hover:bg-blue-800 hover:text-blue-200"
            >
              Contact
            </Link>
          </div>

          {/* Icons + CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <button className="p-2 hover:text-blue-300">
              <BellIcon className="h-6 w-6" />
            </button>
            <Link to="/cart" className="relative p-2 hover:text-blue-300">
              <NavbarCart />
            </Link>
            <button className="p-2 hover:text-blue-300">
              <UserCircleIcon className="h-6 w-6" />
            </button>
            <Link
              to="/signin"
              className="ml-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold hover:bg-blue-400"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md hover:bg-blue-800 focus:outline-none"
            >
              {mobileOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2 bg-blue-800">
          <Link to="/" className="block px-3 py-2 rounded-md hover:bg-blue-700">
            Home
          </Link>
          <Link to="/products" className="block px-3 py-2 rounded-md hover:bg-blue-700">
            Products
          </Link>
          <Link to="/services" className="block px-3 py-2 rounded-md hover:bg-blue-700">
            Services
          </Link>
          <Link to="/promotions" className="block px-3 py-2 rounded-md hover:bg-blue-700">
            Promotions
          </Link>
          <Link to="/blog" className="block px-3 py-2 rounded-md hover:bg-blue-700">
            Blog
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-blue-700">
            Contact
          </Link>
          <Link to="/cart" className="block px-3 py-2 rounded-md hover:bg-blue-700">
            Cart
          </Link>
          <Link to="/signin" className="block px-3 py-2 rounded-md bg-blue-500 text-center">
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}
