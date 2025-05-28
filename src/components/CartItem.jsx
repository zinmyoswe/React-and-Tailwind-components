export default function CartItem({ item, onUpdateQty, onRemove }) {
  const handleDecrease = () => {
    const newQty = item.quantity - 1;
    newQty > 0 ? onUpdateQty(item.id, newQty) : onRemove(item.id);
  };

  const handleIncrease = () => {
    onUpdateQty(item.id, item.quantity + 1);
  };

  return (
    <div className="flex items-center justify-between border-b py-4 gap-4">
      {/* Product Image */}
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />

      {/* Name and Price */}
      <div className="flex-1">
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-3">
        <button onClick={handleDecrease} className="px-2 bg-gray-200 rounded">-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrease} className="px-2 bg-gray-200 rounded">+</button>
      </div>

      {/* Item Subtotal */}
      <div className="text-right w-24 font-medium">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}
