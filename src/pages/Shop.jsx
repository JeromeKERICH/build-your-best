import { useState, useEffect } from "react";
import ShopHero from "./shop/ShopHero";
import ShopTabs from "./shop/ShopTabs";
import EbookSection from "./shop/Ebooks";
import Merch from "./shop/Merch";
import MerchDetail from "./shop/MerchDetails";

export default function Shop() {
  const [activeTab, setActiveTab] = useState("ebooks");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <ShopHero />

      {/* Tabs */}
      {!selectedProduct && (
        <ShopTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      {/* Conditional Rendering */}
      {selectedProduct ? (
        <MerchDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
      ) : activeTab === "ebooks" ? (
        <EbookSection />
      ) : (
        <Merch onViewDetails={setSelectedProduct} />
      )}
    </div>
  );
}
