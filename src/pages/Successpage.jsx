import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("reference");
  const [downloadLink, setDownloadLink] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (reference) {
      verifyPayment(reference);
    }
  }, [reference]);

  const verifyPayment = async (reference) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/payments/verify/${reference}`
      );

      if (response.data.success) {
        setDownloadLink(`${import.meta.env.VITE_API_URL}/api/download/${reference}`);
        setProductInfo(response.data.product);
      }
    } catch (err) {
      console.error("Verification failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-none border border-gray-200 p-12"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <svg 
              className="w-10 h-10 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </motion.div>

          {/* Success Message */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-light text-[#00337C] mb-4"
          >
            Payment Successful! 🎉
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg mb-8"
          >
            Thank you for your purchase! Your eBook is ready for download.
          </motion.p>

          {/* Product Info */}
          {productInfo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-50 p-6 mb-8 border border-gray-100"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-white flex items-center justify-center">
                  <img
                    src={productInfo.image}
                    alt={productInfo.name}
                    className="max-h-12 max-w-12 object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-normal text-[#00337C]">{productInfo.name}</h3>
                  <p className="text-sm text-gray-600">${productInfo.price}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <svg className="animate-spin h-5 w-5 text-[#00337C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Verifying your payment...</span>
              </div>
            ) : downloadLink ? (
              <div className="space-y-4">
                <a
                  href={downloadLink}
                  className="inline-block bg-[#00337C] hover:bg-[#1E4B9E] text-white px-8 py-4 text-lg font-medium transition-colors duration-200"
                >
                  Download Your eBook
                </a>
                <p className="text-sm text-gray-500">
                  The download link has also been sent to your email
                </p>
              </div>
            ) : (
              <div className="text-red-600">
                <p>Unable to verify payment. Please contact support.</p>
              </div>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 text-[#00337C]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instant Access</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 text-[#00337C]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Secure Download</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 text-[#00337C]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Email Copy Sent</span>
              </div>
            </div>
          </motion.div>

          {/* Back to Products */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <Link
              to="/ebooks"
              className="inline-block text-[#00337C] hover:text-[#1E4B9E] transition-colors duration-200"
            >
              ← Back to all guides
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}