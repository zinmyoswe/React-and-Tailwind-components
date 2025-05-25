import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Casual Shirt",
    category: "Clothing",
    price: 1800,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e495d20b-6aa5-4668-9457-c36ed66b1e08/AS+W+NSW+ESSNTL+SS+TEE+BOXY.png",
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 3200,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0459062b-b8cd-4538-8a11-b103a1c2786e/AS+W+NSW+ESSNTL+SS+TEE+BOXY.png",
  },
  {
    id: 3,
    name: "Wrist Watch",
    category: "Accessories",
    price: 4500,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17a9b7e4-bf7d-41d8-b171-a38fd1a5908d/AS+W+NK+DF+SS+TOP.png",
  },
  {
    id: 4,
    name: "Leather Bag",
    category: "Bags",
    price: 2800,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50de8b3a-e709-4575-b877-ba3aa5660003/AS+W+NSW+NK+CHLL+KNT+MD+CRP.png",
  },
  {
    id: 5,
    name: "Sneakers",
    category: "Footwear",
    price: 2100,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c69c815b-e7b5-45a0-a4fb-967478628800/AS+W+NSW+NK+CHLL+WFL+SS+TOP.png",
  },
  {
    id: 6,
    name: "T-Shirt",
    category: "Clothing",
    price: 900,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5bb9ff80-eb1a-4843-a98d-6ea302948397/AS+W+NK+DF+VCTRY+SL+POLO.png",
  },
];

export default function FourColumnProductLayoutwithloading() {
  const [loading, setLoading] = useState(true);
  const [sizeOpen, setSizeOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderPlaceholderCard = (_, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow overflow-hidden animate-pulse"
    >
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 bg-white dark:bg-gray-900 min-h-screen">
      {/* Sidebar */}
      <aside className="bg-white rounded-xl p-4 shadow col-span-1">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2 mb-6">
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Clothing</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Footwear</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Accessories</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Bags</li>
        </ul>

        <div>
          <button
            onClick={() => setSizeOpen(!sizeOpen)}
            className="w-full text-left font-semibold text-gray-800 mb-2"
          >
            Size {sizeOpen ? "▲" : "▼"}
          </button>
          {sizeOpen && (
            <div className="space-y-2 mb-6 pl-2">
              {["S", "M", "L", "XL"].map((size) => (
                <label key={size} className="block text-sm">
                  <input type="checkbox" className="mr-2" /> {size}
                </label>
              ))}
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => setPriceOpen(!priceOpen)}
            className="w-full text-left font-semibold text-gray-800 mb-2"
          >
            Price {priceOpen ? "▲" : "▼"}
          </button>
          {priceOpen && (
            <div className="space-y-2 pl-2">
              <label className="block text-sm">
                <input type="checkbox" className="mr-2" /> 0 THB - 2500 THB
              </label>
              <label className="block text-sm">
                <input type="checkbox" className="mr-2" /> 2500 THB - 5000 THB
              </label>
            </div>
          )}
        </div>
      </aside>

      {/* Product Grid */}
      <main className="col-span-1 lg:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map(renderPlaceholderCard)
            : products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <p className="text-blue-600 font-bold mt-1">{product.price} THB</p>
                  </div>
                </div>
              ))}
        </div>
      </main>
    </div>
  );
}
