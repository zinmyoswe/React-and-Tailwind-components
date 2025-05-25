import { useEffect, useState } from "react";

export default function CardWithPlaceholder() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-sm w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {loading ? (
        // Placeholder Skeleton
        <div role="status" className="animate-pulse">
          <div className="h-48 bg-gray-300"></div>
          <div className="p-4 space-y-4">
            <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
            <div className="h-10 bg-gray-300 rounded w-1/2 mt-4"></div>
          </div>
        </div>
      ) : (
        // Actual Card Content
        <>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/023282c6-d07b-4c45-9ec3-2fa4c0370128/AS+W+NSW+NK+WR+WVN+JKT+V2K.png"
            alt="Card cover"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">Card Title</h5>
            <p className="text-gray-700 mb-4">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-violet-500 to-red-500 text-white px-4 py-2 rounded transition"
            >
              Go somewhere
            </a>
          </div>
        </>
      )}
    </div>
  );
}
