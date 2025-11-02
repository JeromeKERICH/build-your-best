import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CheckoutPage from "./CheckoutPage";

export default function EbookSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  // EBOOKS DATA
  const products = [
    {
      id: "6712abcf123456789",
      name: "Boundaries and Balance",
      category: "boundaries",
      file: "Boundaries & Balance.pdf",
      focus: ["self-care", "relationships"],
      price: 18,
      isBestseller: true,
      image: "/assets/bon.jpg",
      description: "Learn to set healthy limits and create equilibrium in your life",
    },
    {
      id: "6712abcf987654321",
      name: "5-Day Discovery Challenge",
      category: "healing",
      file: "Discovery Challenge.pdf",
      focus: ["self-discovery", "growth"],
      price: 15,
      isBestseller: true,
      image: "/assets/5-d.jpg",
      description: "Embrace the non-linear journey of personal discovery and transformation",
    },
    {
      id: "6712abcfa1234",
      name: "Reclaim Your Power",
      category: "empowerment",
      file: "RECLAIM YOUR POWER.pdf",
      focus: ["confidence", "purpose"],
      price: 20,
      isBestseller: true,
      image: "/assets/rec.jpg",
      description: "Rediscover your inner strength and step into your authentic power",
    },
    {
      id: "6712abcfb9876",
      name: "The Self-Awareness Guide",
      category: "awareness",
      file: "Self Awareness.pdf",
      focus: ["mindfulness", "clarity"],
      price: 0,
      isBestseller: false,
      image: "/assets/aware.jpg",
      description: "Develop deeper self-knowledge and emotional intelligence",
    },
  ];

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowCheckout(true);
  };

  // Render checkout page when product is selected
  if (showCheckout && selectedProduct) {
    return <CheckoutPage selectedProduct={selectedProduct} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light text-[#00337C] mb-6 tracking-tight"
          >
            Personal Growth Guides
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Transformative resources to guide your journey of self-discovery and empowerment
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-none border border-gray-100 hover:border-[#00337C]/20 transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                {/* Bestseller Badge */}
                {product.isBestseller && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-[#B76E79] text-white px-3 py-1 text-xs font-medium tracking-wide uppercase">
                      Bestseller
                    </div>
                  </div>
                )}

                {/* Image Container - Alternative: contain instead of cover */}
                  <div className="relative bg-gray-50 min-h-[120px] flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105 ${
                          loadedImages[product.id] ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => handleImageLoad(product.id)}
                      />
                      {!loadedImages[product.id] && (
                        <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
                      )}
                    </div>
                  </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow border-t border-gray-100">
                  <div className="flex-grow">
                    <h3 className="text-xl font-normal text-[#00337C] mb-3 leading-tight tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className={`text-lg font-medium ${
                      product.price === 0 ? "text-green-600" : "text-[#B76E79]"
                    }`}>
                      {product.price === 0 ? "Free" : `$${product.price}`}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`px-6 py-2 text-sm font-medium transition-all duration-200 ${
                        product.price === 0 
                          ? "bg-green-600 hover:bg-green-700 text-white" 
                          : "bg-[#00337C] hover:bg-[#1E4B9E] text-white"
                      }`}
                    >
                      {product.price === 0 ? "Download Free" : "Get Guide"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}