import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import merchData from "./MerchData";

const Merch = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when page loads
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage when updated
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to cart function
  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      alert("Item already in cart.");
      return;
    }

    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
  
  };

  // ✅ Navigate to checkout
  const handleOpenCart = () => {
    navigate("/merchcheckout");
  };

  return (
    <section className="py-5 bg-white relative">
      {/* Floating Cart Icon */}
      <button
        onClick={handleOpenCart}
        className="fixed top-25 right-6 bg-[#00337C] text-white p-3 rounded-full shadow-lg hover:bg-[#1E4B9E] transition-all z-50"
      >
        <ShoppingCart size={22} />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#B76E79] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-light text-[#00337C] mb-4 tracking-tight"
          >
            BYBS Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Wear your strength. Carry your journey. Live your growth.
          </motion.p>
        </div>

        {/* Merch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-gray-100 hover:border-[#00337C]/20 transition-all duration-300 flex flex-col h-full overflow-hidden shadow-sm"
            >
              {/* Bestseller Badge */}
              {item.isBestseller && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-[#B76E79] text-white px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full">
                    Bestseller
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative bg-gray-50 p-4 max-h-[250px] flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full w-full object-contain transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow border-t border-gray-100">
                <div className="flex-grow mb-4">
                  <h3 className="text-xl font-normal text-[#00337C] mb-2 leading-tight tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                  <span className="text-2xl font-light text-[#B76E79] mt-3 block">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                {/* ✅ Single Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full px-4 py-3 text-sm font-medium bg-[#00337C] hover:bg-[#1E4B9E] text-white transition-all duration-200 text-center"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merch;
