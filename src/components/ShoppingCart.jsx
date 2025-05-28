import { useState } from "react";
import CartItem from "./CartItem";

const initialCart = [
  {
    id: 1,
    name: "Product A",
    price: 10.0,
    quantity: 2,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e495d20b-6aa5-4668-9457-c36ed66b1e08/AS+W+NSW+ESSNTL+SS+TEE+BOXY.png",
  },
  {
    id: 2,
    name: "Product B",
    price: 25.5,
    quantity: 1,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0459062b-b8cd-4538-8a11-b103a1c2786e/AS+W+NSW+ESSNTL+SS+TEE+BOXY.png",
  },
  {
    id: 3,
    name: "Product C",
    price: 7.5,
    quantity: 3,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17a9b7e4-bf7d-41d8-b171-a38fd1a5908d/AS+W+NK+DF+SS+TOP.png",
  },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id, newQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + 0; // Add taxes/shipping if needed

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQty={updateQuantity}
              onRemove={removeItem}
            />
          ))}

          <div className="text-right mt-6">
            <p className="text-lg font-semibold">
              Subtotal: ${subtotal.toFixed(2)}
            </p>
            <p className="text-xl font-bold mt-2">Total: ${total.toFixed(2)}</p>
            <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
