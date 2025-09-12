
import React from "react";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="p-6 rounded-lg bg-red-50 border border-red-300 text-red-700 text-center">
      <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
      <p className="text-sm mb-4">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
      >
        Try again
      </button>
    </div>
  );
}
