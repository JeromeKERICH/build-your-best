// src/pages/Cart.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // 🧠 Load saved cart
  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(Array.isArray(storedCart) ? storedCart : []);
    } catch (err) {
      console.error("Error loading cart:", err);
      setCartItems([]);
    }
  }, []);

  // 🗑 Remove item
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item?.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // 💰 Calculate total safely
  const getTotal = () => {
    if (!Array.isArray(cartItems) || cartItems.length === 0) return 0;

    return cartItems.reduce((acc, item) => {
      const price = Number(item?.price) || 0;
      const qty = Number(item?.quantity) || 1; // default 1 if undefined
      return acc + price * qty;
    }, 0);
  };

  // 🛒 Handle checkout
  const handleCheckout = () => {
    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    navigate("/checkout", { state: { cartItems } });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#00337C]">
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty.
          <br />
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
                  src={item?.image || "/placeholder.jpg"}
                  alt={item?.name || "Product"}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div>
                  <h3 className="font-semibold text-lg text-[#00337C]">
                    {item?.name || "Unnamed Product"}
                  </h3>

                  {item?.selectedSize && (
                    <p className="text-gray-600">Size: {item.selectedSize}</p>
                  )}
                  {item?.selectedColor && (
                    <p className="text-gray-600">
                      Color: {item.selectedColor}
                    </p>
                  )}
                  {item?.deliveryLocation && (
                    <p className="text-gray-600">
                      Delivery: {item.deliveryLocation}
                    </p>
                  )}

                  <p className="text-gray-800 font-semibold mt-1">
                    USD {item?.price ? item.price.toFixed(2) : "0.00"}
                  </p>
                </div>
              </div>

              <button
                className="text-red-600 mt-3 md:mt-0 font-medium hover:underline"
                onClick={() => handleRemove(item?.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="border-t pt-4 mt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold text-[#00337C]">Total:</h3>
            <p className="text-2xl font-semibold text-[#B76E79]">
              USD {getTotal().toFixed(2)}
            </p>
          </div>

          <button
            onClick={handleCheckout}
            className="bg-[#00337C] text-white w-full py-3 rounded-xl mt-6 hover:bg-[#1E4B9E]"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
