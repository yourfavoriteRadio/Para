import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import ErrorFallback from "./components/ErrorFallback";
const Products = lazy(() => import("./pages/ProductPage"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // logic to reset state if needed
            window.location.reload();
          }}
        >
          <Suspense
            fallback={<Loader />}
          >
            <Routes>
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;

// Add a fixed delay so you can see the loading state

// async function delayForDemo(promise) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 5000);
//   }).then(() => promise);
// }
