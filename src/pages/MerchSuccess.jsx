import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { CheckCircle } from "lucide-react";

export default function MerchSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState("verifying"); // verifying | success | failed
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Get the Paystack reference from URL
    const query = new URLSearchParams(location.search);
    const reference = query.get("reference");

    if (reference) verifyMerchPayment(reference);
    else setStatus("failed");
  }, [location.search]);

  const verifyMerchPayment = async (reference) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/merch/verify`, {
        reference,
      });

      if (res.data.success) {
        setOrderDetails(res.data.order);
        setStatus("success");
        localStorage.removeItem("cart"); // clear cart
      } else {
        setStatus("failed");
      }
    } catch (err) {
      console.error("Verification error:", err);
      setStatus("failed");
    }
  };

  if (status === "verifying") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600"
        >
          <div className="animate-spin border-4 border-[#00337C]/30 border-t-[#00337C] w-12 h-12 rounded-full mx-auto mb-6"></div>
          <p>Verifying your payment, please wait...</p>
        </motion.div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-light text-red-600 mb-4"
        >
          Payment Verification Failed
        </motion.h1>
        <p className="text-gray-600 mb-8">
          We couldn’t verify your transaction. Please contact support if you were charged.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-[#00337C] hover:bg-[#1E4B9E] text-white px-6 py-3 rounded transition"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  // ✅ Success
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-md rounded-xl p-10 max-w-md mx-auto"
      >
        <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-light text-[#00337C] mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you, {orderDetails?.fullName || "Customer"}!  
          Your order has been confirmed.
        </p>

        <div className="bg-gray-50 p-4 rounded-md text-left text-sm text-gray-700 mb-6">
          <p><strong>Reference:</strong> {orderDetails?.transactionRef}</p>
          <p><strong>Email:</strong> {orderDetails?.userEmail}</p>
          <p><strong>Items:</strong> {orderDetails?.items?.length} products</p>
          <p><strong>Total:</strong> ${orderDetails?.totalAmount?.toFixed(2)}</p>
        </div>

        <button
          onClick={() => navigate("/shop")}
          className="bg-[#00337C] hover:bg-[#1E4B9E] text-white px-6 py-3 rounded transition"
        >
          Continue Shopping
        </button>
      </motion.div>
    </div>
  );
}
