import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function MerchCheckout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Load cart items from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  // Handle text input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle product size/color selection
  const handleItemChange = (id, field, value) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Remove item
  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Handle checkout via Paystack
  const handleCheckout = async () => {
    if (!formData.email || !formData.fullName) {
      alert("Please enter your name and email before checkout.");
      return;
    }

    // Ensure all items have size/color if applicable
    const incomplete = cartItems.some(
      (item) =>
        (item.sizes?.length && !item.selectedSize) ||
        (item.colors?.length && !item.selectedColor)
    );
    if (incomplete) {
      alert("Please select size and color for all items before proceeding.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/merch/initiate`,
        {
          email: formData.email,
          fullName: formData.fullName,
          address: formData.address,
          city: formData.city,
          country: formData.country,
          postalCode: formData.postalCode,
          items: cartItems,
          amount: total,
        }
      );

      window.location.href = res.data.data.authorization_url;
    } catch (err) {
      console.error(err);
      alert("Error initializing payment. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-light text-[#00337C] mb-4">Checkout</h1>
          <p className="text-gray-600">Select your options and complete your order securely</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: CART ITEMS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border border-gray-200 p-8 shadow-sm"
          >
            <h2 className="text-2xl font-light text-[#00337C] mb-6">Your Cart</h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-100 pb-5 flex justify-between"
                  >
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-contain"
                      />
                      <div>
                        <h3 className="font-medium text-[#00337C]">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-1">
                          ${item.price.toFixed(2)}
                        </p>

                        {/* SIZE SELECTOR */}
                        {item.sizes && item.sizes.length > 0 && (
                          <div className="mb-2">
                            <label className="text-xs text-gray-500">Size</label>
                            <select
                              value={item.selectedSize || ""}
                              onChange={(e) =>
                                handleItemChange(item.id, "selectedSize", e.target.value)
                              }
                              className="border border-gray-300 text-sm p-1 rounded w-full"
                            >
                              <option value="">Select Size</option>
                              {item.sizes.map((size) => (
                                <option key={size} value={size}>
                                  {size}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {/* COLOR SELECTOR */}
                        {item.colors && item.colors.length > 0 && (
                          <div>
                            <label className="text-xs text-gray-500">Color</label>
                            <select
                              value={item.selectedColor || ""}
                              onChange={(e) =>
                                handleItemChange(item.id, "selectedColor", e.target.value)
                              }
                              className="border border-gray-300 text-sm p-1 rounded w-full"
                            >
                              <option value="">Select Color</option>
                              {item.colors.map((color) => (
                                <option key={color} value={color}>
                                  {color}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div className="flex justify-between pt-4 border-t border-gray-200 text-lg font-medium text-[#00337C]">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            )}
          </motion.div>

          {/* RIGHT: CUSTOMER INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border border-gray-200 p-8 shadow-sm"
          >
            <h2 className="text-2xl font-light text-[#00337C] mb-6">
              Customer Information
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#00337C] focus:ring-1 focus:ring-[#00337C] outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#00337C] focus:ring-1 focus:ring-[#00337C] outline-none"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Shipping Address"
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#00337C] focus:ring-1 focus:ring-[#00337C] outline-none"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#00337C] focus:ring-1 focus:ring-[#00337C] outline-none"
                />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#00337C] focus:ring-1 focus:ring-[#00337C] outline-none"
                />
              </div>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="Postal Code"
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#00337C] focus:ring-1 focus:ring-[#00337C] outline-none"
              />
            </div>

            <button
              onClick={handleCheckout}
              disabled={isLoading || cartItems.length === 0}
              className="w-full bg-[#00337C] hover:bg-[#1E4B9E] text-white py-4 text-lg font-medium transition-colors mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : "Proceed to Payment"}
            </button>

            <p
              onClick={() => navigate(-1)}
              className="text-sm text-gray-500 mt-4 text-center hover:text-[#00337C] cursor-pointer"
            >
              ← Continue Shopping
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
