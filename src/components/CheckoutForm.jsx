import { useState } from "react";

export default function CheckoutForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", form);
    alert("Order placed successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Customer Info */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-2">Customer Information</h3>
        </div>
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            name="name"
            type="text"
            className="mt-1 w-full border rounded px-3 py-2"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            className="mt-1 w-full border rounded px-3 py-2"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Shipping Address */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Address</label>
          <input
            name="address"
            type="text"
            className="mt-1 w-full border rounded px-3 py-2"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">City</label>
          <input
            name="city"
            type="text"
            className="mt-1 w-full border rounded px-3 py-2"
            value={form.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">ZIP / Postal Code</label>
          <input
            name="zip"
            type="text"
            className="mt-1 w-full border rounded px-3 py-2"
            value={form.zip}
            onChange={handleChange}
            required
          />
        </div>

        {/* Payment Info */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Card Number</label>
          <input
            name="cardNumber"
            type="text"
            maxLength={16}
            className="mt-1 w-full border rounded px-3 py-2"
            value={form.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Expiry (MM/YY)</label>
          <input
            name="expiry"
            type="text"
            className="mt-1 w-full border rounded px-3 py-2"
            value={form.expiry}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">CVV</label>
          <input
            name="cvv"
            type="password"
            maxLength={4}
            className="mt-1 w-full border rounded px-3 py-2"
            value={form.cvv}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
