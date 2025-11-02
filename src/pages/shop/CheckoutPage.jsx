import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function CheckoutPage({ selectedProduct }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    // ✅ Check for Paystack redirect after successful payment
    const urlParams = new URLSearchParams(window.location.search);
    const reference = urlParams.get("reference");
    if (reference) {
      verifyPayment(reference);
    }
  }, []);

  // ✅ Verify payment with backend
  const verifyPayment = async (reference) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/payments/verify`, { reference });

    

      if (res.data.success) {
        alert("Payment verified successfully!");

        // ✅ Trigger Resend email confirmation
        await axios.post(`${import.meta.env.VITE_API_URL}/api/email/send`, {
          userEmail: formData.email || res.data.order.userEmail,
          productName: selectedProduct.name,
        });

        // ✅ Redirect or open download
        window.location.href = res.data.downloadLink;
        window.history.replaceState({}, document.title, window.location.pathname);
      } else {
        alert("Payment verification failed. Please contact support.");
      }
    } catch (err) {
      console.error("Error verifying payment:", err);
      alert("Error verifying payment.");
    }
  };

  // ✅ Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Trigger Paystack initialization via backend
  const handlePay = async () => {
    if (selectedProduct.price === 0) {
      // Free product → direct download
      window.location.href = `${import.meta.env.VITE_API_URL}/api/download/${selectedProduct.id}`;
      return;
    }

    if (!formData.email || !formData.fullName) {
      alert("Please enter your name and email address.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/payments/initiate`,
        {
          fullName: formData.fullName,
          email: formData.email,
          productId: selectedProduct.id,
          productName: selectedProduct.name,
          file: selectedProduct.file,
          price: selectedProduct.price, // ✅ Send actual price (e.g. 18)
          category: selectedProduct.category,
        }
      );

      // ✅ Redirect to Paystack checkout page
      window.location.href = res.data.data.authorization_url;
    } catch (error) {
      console.error("Payment init error:", error);
      alert("Error initializing payment.");
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Proceed to payment UI
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const isFormValid = formData.fullName && formData.email;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-light text-[#00337C] mb-4">
            {selectedProduct.price === 0
              ? "Get Your Free Guide"
              : "Complete Your Purchase"}
          </h1>
          <p className="text-gray-600">
            {selectedProduct.price === 0
              ? "Enter your details to receive your free guide instantly."
              : "Secure checkout for your personal growth journey."}
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-gray-200 p-8 h-fit"
          >
            <h2 className="text-2xl font-light text-[#00337C] mb-6">
              Order Summary
            </h2>

            <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-100">
              <div className="w-20 h-20 bg-gray-50 flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-16 max-w-16 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-normal text-[#00337C]">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {selectedProduct.description}
                </p>
                <p className="text-lg font-light text-[#B76E79] mt-2">
                  {selectedProduct.price === 0
                    ? "FREE"
                    : `$${selectedProduct.price}`}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-3 flex justify-between text-lg font-medium text-[#00337C]">
              <span>Total</span>
              <span>
                {selectedProduct.price === 0
                  ? "FREE"
                  : `$${selectedProduct.price}`}
              </span>
            </div>
          </motion.div>

          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {!showPayment ? (
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-200 p-8"
              >
                <h2 className="text-2xl font-light text-[#00337C] mb-6">
                  Customer Information
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#00337C] focus:ring-1 focus:ring-[#00337C] outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#00337C] focus:ring-1 focus:ring-[#00337C] outline-none"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      We'll send your download link to this email.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="w-full bg-[#00337C] hover:bg-[#1E4B9E] text-white py-4 text-lg font-medium mt-8 disabled:opacity-50"
                >
                  Continue to Payment
                </button>
              </motion.form>
            ) : (
              <motion.div className="bg-white border border-gray-200 p-8 text-center">
                <h2 className="text-2xl font-light text-[#00337C] mb-4">
                  Ready to Complete Payment
                </h2>
                <p className="text-gray-600 mb-6">
                  Your guide will be sent to: <br />
                  <strong>{formData.email}</strong>
                </p>

                <button
                  onClick={handlePay}
                  disabled={isLoading}
                  className="w-full bg-[#00337C] hover:bg-[#1E4B9E] text-white py-4 text-lg font-medium disabled:opacity-50"
                >
                  {isLoading ? "Processing..." : "Pay Now"}
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
