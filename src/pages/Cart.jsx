import { useEffect, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { supabase } from '../library/supabaseClient';
import { FiDownload, FiMail, FiShield, FiHelpCircle } from 'react-icons/fi';

export default function CheckoutPage({ selectedProduct }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [form, setForm] = useState({ name: '', email: '' });
  const [isPaying, setIsPaying] = useState(false);
  const [error, setError] = useState('');

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSuccess = async () => {
    setIsPaying(true);
    try {
      const { error: insertError } = await supabase.from('purchases').insert([{
        email: form.email,
        name: form.name,
        product_id: selectedProduct.id,
        product_name: selectedProduct.name,
        price: selectedProduct.price,
        status: 'paid'
      }]);

      if (insertError) throw insertError;

      const { data, error: signedUrlError } = await supabase
        .storage
        .from("books")
        .createSignedUrl(selectedProduct.file, 3600);

      if (signedUrlError) throw signedUrlError;

      const a = document.createElement("a");
      a.href = data.signedUrl;
      a.download = selectedProduct.file;
      document.body.appendChild(a);
      a.click();
      a.remove();

    } catch (error) {
      console.error("Error:", error);
      setError("Download failed. Please contact support using the link below.");
    } finally {
      setIsPaying(false);
    }
  };

  const componentProps = {
    email: form.email,
    amount: selectedProduct.price * 100,
    currency: "USD",
    metadata: {
      name: form.name,
      product: selectedProduct.name
    },
    publicKey,
    text: isPaying ? "Processing..." : "Pay Now",
    onSuccess: handleSuccess,
    onClose: () => setError("Payment was not completed"),
    disabled: !form.name || !form.email || isPaying
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#00337C] to-[#1E4B9E] p-6 text-white">
          <h1 className="text-2xl font-bold">Complete Your Purchase</h1>
          <p className="opacity-90">Secure checkout powered by Paystack</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 p-6">
          {/* Left Column - Product Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="font-medium text-gray-900">{selectedProduct.name}</h3>
                <p className="text-sm text-gray-600">{selectedProduct.description}</p>
                <p className="mt-2 text-[#B76E79] font-bold">${selectedProduct.price}</p>
              </div>
            </div>

            {/* Customer Info */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900">Customer Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00337C] focus:border-[#00337C]"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00337C] focus:border-[#00337C]"
                  placeholder="your@email.com"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">Receipt and download link will be sent here</p>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                <p>{error}</p>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Subtotal</span>
                <span>${selectedProduct.price}</span>
              </div>
              
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              
              <div className="flex justify-between py-2 font-medium">
                <span>Total</span>
                <span className="text-[#B76E79]">${selectedProduct.price}</span>
              </div>

              <div className="mt-6">
                <PaystackButton 
                  {...componentProps} 
                  className="w-full bg-[#00337C] hover:bg-[#1E4B9E] text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-md" 
                />
              </div>
            </div>

            {/* Post-Payment Instructions */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-medium text-blue-800 flex items-center gap-2 mb-2">
                <FiDownload className="text-blue-600" /> What happens next?
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-blue-700">
                <li>Complete payment via Paystack's secure portal</li>
                <li>Your download will start automatically</li>
                <li>Check your email for a receipt </li>
                
              </ol>
            </div>

            {/* Support & Legal Links */}
            <div className="text-xs text-gray-500 space-y-2">
              <p className="flex items-center gap-1">
                <FiShield className="text-gray-400" />
                All transactions are secure and encrypted
              </p>
              <p>
                By completing your purchase, you agree to our {' '}
                <a href="/terms" className="text-[#00337C] hover:underline">Terms of Service</a> and {' '}
                <a href="/privacy" className="text-[#00337C] hover:underline">Privacy Policy</a>
              </p>
              <p className="flex items-center gap-1">
                <FiHelpCircle className="text-gray-400" />
                Need help? {' '}
                <a href="mailto:support@buildyourbestselfblog.com" className="text-[#00337C] hover:underline">Contact Support</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}