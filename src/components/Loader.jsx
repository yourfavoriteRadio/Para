// components/Loader.jsx
import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-4 text-sm font-medium text-blue-600 animate-pulse">
        Loading...
      </p>
    </div>
  );
}
