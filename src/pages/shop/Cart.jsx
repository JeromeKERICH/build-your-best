// src/pages/Cart.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty. <br />
          <button
            className="text-blue-600 underline mt-2"
            onClick={() => navigate("/shop")}
          >
            Continue shopping
          </button>
        </p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">Size: {item.selectedSize}</p>
                  <p className="text-gray-600">Color: {item.selectedColor}</p>
                  <p className="text-gray-600">
                    Delivery: {item.deliveryLocation}
                  </p>
                  <p className="text-gray-800 font-semibold mt-1">
                    USD {item.price}
                  </p>
                </div>
              </div>

              <button
                className="text-red-600 mt-3 md:mt-0 font-medium hover:underline"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="border-t pt-4 mt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total:</h3>
            <p className="text-2xl font-semibold text-blue-600">
              USD {getTotal().toFixed(2)}
            </p>
          </div>

          <button
            onClick={handleCheckout}
            className="bg-blue-600 text-white w-full py-3 rounded-xl mt-6 hover:bg-blue-700"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
