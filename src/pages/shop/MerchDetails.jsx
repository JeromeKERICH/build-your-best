// src/pages/MerchDetail.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import merchData from "./MerchData";

const MerchDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");

  useEffect(() => {
    const foundProduct = merchData.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor || !deliveryLocation) {
      alert("Please select all options before proceeding.");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItem = {
      ...product,
      selectedSize,
      selectedColor,
      deliveryLocation,
      quantity: 1,
    };

    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/cart");
  };

  if (!product) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-xl font-semibold mb-4">USD {product.price}</p>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Select Size:</label>
            <select
              className="w-full border rounded-lg p-2"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">-- Choose Size --</option>
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Select Color:</label>
            <select
              className="w-full border rounded-lg p-2"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">-- Choose Color --</option>
              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Delivery Location:</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter your city or area"
              value={deliveryLocation}
              onChange={(e) => setDeliveryLocation(e.target.value)}
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white w-full py-3 rounded-xl mt-4 hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchDetail;
