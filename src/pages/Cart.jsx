import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function CheckoutPage(
    
    { selectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agreeTerms: false
  });

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  const [step, setStep] = useState(1); // 1 = form, 2 = confirmation

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (!formData.name || !formData.email || !formData.agreeTerms) {
      alert('Please fill all required fields');
      return;
    }
    setStep(2);
  };

  return (
    <div className="max-w-md mx-auto my-12 p-6 bg-white rounded-xl shadow-md">
      {/* Checkout Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#3A3A3A]">Complete Your Purchase</h2>
        <div className="w-16 h-1 bg-[#B76E79] mx-auto my-4"></div>
      </div>

      {/* Product Summary */}
      <div className="bg-[#F5EFE7] p-4 rounded-lg mb-8">
        <h3 className="font-medium text-lg mb-2">You're purchasing:</h3>
        <div className="flex justify-between items-center">
          <span className="text-[#3A3A3A]">{selectedProduct.name}</span>
          <span className="font-bold text-[#B76E79]">${selectedProduct.price}</span>
        </div>
      </div>

      {step === 1 ? (
        /* Checkout Form */
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#5A5A5A] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#D1D1D1] rounded-lg focus:ring-[#B76E79] focus:border-[#B76E79]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#5A5A5A] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#D1D1D1] rounded-lg focus:ring-[#B76E79] focus:border-[#B76E79]"
                required
              />
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#B76E79] border-[#D1D1D1] rounded focus:ring-[#B76E79]"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreeTerms" className="text-[#5A5A5A]">
                  I agree to the <Link to="/terms" className="text-[#B76E79] hover:underline">Terms of Service</Link>
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 px-6 py-3 bg-[#B76E79] hover:bg-[#9E5A63] text-white font-medium rounded-lg shadow hover:shadow-md transition-all duration-300"
          >
            Proceed to Payment
          </button>
        </form>
      ) : (
        /* Confirmation Step */
        <div className="space-y-6">
          <div className="text-center">
            <svg className="w-16 h-16 text-[#B76E79] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-xl font-bold text-[#3A3A3A] mb-2">Order Received!</h3>
            <p className="text-[#5A5A5A]">Thank you, {formData.name}!</p>
          </div>

          <div className="bg-[#F5EFE7] p-4 rounded-lg">
            <h4 className="font-medium mb-2">What Happens Next:</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-[#5A5A5A]">
              <li>You'll be redirected to our secure payment gateway</li>
              <li>After successful payment, you'll receive an email with your download links</li>
              <li>Check your spam folder if you don't see the email within 5 minutes</li>
              <li>Access your purchase anytime from your account dashboard</li>
            </ol>
          </div>

          {/* Payment Gateway Integration Point */}
          <div className="mt-6 p-4 border-2 border-dashed border-[#B76E79] rounded-lg text-center">
            <p className="text-sm text-[#5A5A5A] mb-2">Payment gateway will be integrated here</p>
            <button
              onClick={() => alert('Payment gateway would process payment here')}
              className="px-6 py-2 bg-[#B76E79] hover:bg-[#9E5A63] text-white rounded-lg text-sm"
            >
              Simulate Payment
            </button>
          </div>

          <Link
            to="/shop"
            className="block text-center mt-6 text-[#B76E79] hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
}