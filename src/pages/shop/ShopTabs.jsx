// src/pages/shop/ShopTabs.jsx
export default function ShopTabs({ activeTab, setActiveTab }) {
    return (
      <section className="py-6 bg-white sticky top-0 z-10 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-4">
          {/* Ebooks Tab */}
          <button
            onClick={() => setActiveTab("ebooks")}
            className={`px-6 py-2  text-sm md:text-base font-semibold transition-all duration-300 ${
              activeTab === "ebooks"
                ? "bg-[#00337C] text-white shadow-lg"
                : "bg-[#F5F9FF] text-[#00337C] hover:bg-[#00337C]/10"
            }`}
          >
            Ebooks
          </button>
  
          {/* Merch Tab */}
          <button
            onClick={() => setActiveTab("merch")}
            className={`px-6 py-2 border border-2 text-sm md:text-base font-semibold transition-all duration-300 ${
              activeTab === "merch"
                ? "bg-[#00337C] text-white shadow-md"
                : "bg-white text-gray/90"
            }`}
          >
            Merchandise
          </button>
        </div>
      </section>
    );
  }
  