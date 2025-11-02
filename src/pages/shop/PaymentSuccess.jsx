import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("verifying"); // verifying | success | failed
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const verifyPayment = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const reference = urlParams.get("reference");

      if (!reference) {
        setStatus("failed");
        return;
      }

      try {
        // ✅ Verify payment via backend
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/payments/verify`,
          { reference }
        );

        if (res.data.success) {
          setOrder(res.data.order);
          setStatus("success");
        } else {
          setStatus("failed");
        }
      } catch (err) {
        console.error("❌ Payment verification failed:", err);
        setStatus("failed");
      }
    };

    verifyPayment();
  }, []);

  const handleDownload = () => {
    if (order && order.productId) {
      window.location.href = `${import.meta.env.VITE_API_URL}/api/download/${order.productId}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      {/* Verifying State */}
      {status === "verifying" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 border-4 border-[#00337C] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h1 className="text-2xl font-light text-[#00337C] mb-2">
            Verifying your payment...
          </h1>
          <p className="text-gray-600">
            Please wait a moment while we confirm your transaction.
          </p>
        </motion.div>
      )}

      {/* Success State */}
      {status === "success" && order && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg bg-white p-10 rounded-none shadow-sm text-center border border-gray-100"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
          >
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <h1 className="text-3xl font-light text-[#00337C] mb-4">
            Payment Successful 🎉
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you, <strong>{order.fullName}</strong>! <br />
            Your purchase of <strong>{order.productName}</strong> was successful.
          </p>

          <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 text-left mb-6">
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium text-[#00337C]">Reference:</span>{" "}
              {order.reference}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium text-[#00337C]">Amount Paid:</span> $
              {order.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium text-[#00337C]">Email:</span>{" "}
              {order.email}
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="w-full bg-[#00337C] hover:bg-[#1E4B9E] text-white py-3 text-lg font-medium transition-colors"
          >
            📘 Download Your Guide
          </button>

          <button
            onClick={() => navigate("/shop")}
            className="w-full mt-4 border border-[#00337C] text-[#00337C] hover:bg-[#00337C] hover:text-white py-3 text-lg font-medium transition-colors"
          >
            Continue Shopping
          </button>
        </motion.div>
      )}

      {/* Failed State */}
      {status === "failed" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg bg-white p-10 rounded-none shadow-sm text-center border border-gray-100"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center"
          >
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.div>

          <h1 className="text-3xl font-light text-[#B76E79] mb-4">
            Payment Verification Failed
          </h1>
          <p className="text-gray-600 mb-6">
            We couldn’t verify your transaction. Please contact support or try again.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="w-full bg-[#00337C] hover:bg-[#1E4B9E] text-white py-3 text-lg font-medium transition-colors"
          >
            Return to Shop
          </button>
        </motion.div>
      )}
    </div>
  );
}
