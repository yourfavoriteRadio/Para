export default function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md p-3 animate-pulse"
        >
          <div className="w-full h-32 bg-gray-200 rounded-md"></div>
          <div className="mt-3 h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="mt-2 h-3 bg-gray-200 rounded w-1/2"></div>
          <div className="mt-4 flex justify-between items-center">
            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-16 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
