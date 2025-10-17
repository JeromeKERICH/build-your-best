import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import merchData from "./MerchData"; 

const Merch = ({ onViewDetails }) => {
  const navigate = useNavigate();

  const handleViewDetails = (product) => {
    navigate(`/merch/${product.id}`);
  };

  return (
    <section className="py-5 bg-white">
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
              className="group relative bg-white border border-gray-100 hover:border-[#00337C]/20 transition-all duration-300 flex flex-col h-full overflow-hidden  shadow-sm"
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
              <div
                onClick={() => handleViewDetails(item)}
                className="cursor-pointer relative bg-gray-50 p-2 max-h-[250px] flex items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full w-full object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow border-t border-gray-100">
                <div className="flex-grow mb-4">
                  <h3
                    onClick={() => handleViewDetails(item)}
                    className="text-xl font-normal text-[#00337C] mb-2 leading-tight tracking-tight hover:text-[#1E4B9E] cursor-pointer"
                  >
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-[#B76E79]">
                      ${item.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {item.category === "hoodie"
                        ? "Premium Hoodie"
                        : item.category === "tshirt"
                        ? "Classic Tee"
                        : item.category === "journal"
                        ? "Journal"
                        : "Accessory"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => onViewDetails(item)}
                    className="flex-1 px-4 py-3 text-sm font-medium bg-[#00337C] hover:bg-[#1E4B9E] text-white transition-all duration-200 text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onViewDetails(item)}
                    className="px-4 py-3 text-sm font-medium border border-[#00337C] text-[#00337C] hover:bg-[#00337C] hover:text-white transition-all duration-200 text-center"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 pt-8 border-t border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-[#00337C] mb-2">Free Shipping</h4>
              <p>On all orders over $75</p>
            </div>
            <div>
              <h4 className="font-medium text-[#00337C] mb-2">30-Day Returns</h4>
              <p>Hassle-free guarantee</p>
            </div>
            <div>
              <h4 className="font-medium text-[#00337C] mb-2">Ethically Made</h4>
              <p>Supporting women-owned businesses</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Merch;
