import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaFileAlt, FaLinkedin, FaCheckCircle } from 'react-icons/fa';
import {supabase} from '../library/supabaseClient';

const ResumeCart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    targetRole: '',
    cvFile: null,
    linkedinUrl: '',
    phone: '', // Added phone field for WhatsApp
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Get the selected service from navigation state
  useEffect(() => {
    if (location.state && location.state.service) {
      setSelectedService(location.state.service);
    } else {
      // Redirect if no service selected
      navigate('/cv-interview-prep');
    }
  }, [location, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cvFile: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // 1. Upload CV file to Supabase Storage if applicable
      let cvUrl = '';
      if (formData.cvFile && selectedService.requiresCV) {
        const fileExt = formData.cvFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `cvs/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('cv-bucket')
          .upload(filePath, formData.cvFile);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: urlData } = supabase.storage
          .from('cv-bucket')
          .getPublicUrl(filePath);
        
        cvUrl = urlData.publicUrl;
      }

      // 2. Create order record in Supabase - FIXED INSERT
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert({
          service_name: selectedService.title,
          customer_name: formData.name,
          customer_email: formData.email,
          target_role: formData.targetRole,
          cv_url: cvUrl,
          linkedin_url: formData.linkedinUrl,
          amount: selectedService.price,
          status: 'pending',
        })
        .select() // This is needed to return the inserted data
        .single(); // Get a single record

      if (orderError) throw orderError;
      if (!orderData) throw new Error('No data returned from insert operation');

      // 3. Initialize Paystack payment
      if (window.PaystackPop) {
        const handler = window.PaystackPop.setup({
          key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
          email: formData.email,
          amount: selectedService.price * 100, // Paystack expects amount in kobo
          currency: 'USD',
          ref: `order_${orderData.id}_${Date.now()}`, // Generate a unique reference
          metadata: {
            custom_fields: [
              {
                display_name: "Service Name",
                variable_name: "service_name",
                value: selectedService.title,
              },
              {
                display_name: "Order ID",
                variable_name: "order_id",
                value: orderData.id,
              },
            ]
          },
          callback: function(response) {
            // Payment successful
            handlePaymentSuccess(response, orderData.id);
          },
          onClose: function() {
            // Payment closed
            setIsProcessing(false);
            alert('Payment window closed.');
          },
        });
        handler.openIframe();
      } else {
        throw new Error('Paystack not loaded');
      }
    } catch (error) {
      console.error('Error processing order:', error);
      alert('There was an error processing your order. Please try again.');
      setIsProcessing(false);
    }
  };

  const handlePaymentSuccess = async (paymentResponse, orderId) => {
    try {
      // Update order status in Supabase
      const { error } = await supabase
        .from('orders')
        .update({
          status: 'paid',
          payment_reference: paymentResponse.reference,
          paid_at: new Date().toISOString(),
        })
        .eq('id', orderId);

      if (error) throw error;

      
      
      // Send WhatsApp notification to ADMIN
      const adminNumber = import.meta.env.VITE_ADMIN_WHATSAPP_NUMBER;
      const adminMessage = `New Order Alert! 🎉\n\nCustomer: ${formData.name}\nService: ${selectedService.title}\nOrder ID: #${orderId}\nAmount: $${selectedService.price}\nEmail: ${formData.email}\nPhone: ${formData.phone}`;
      const adminWhatsappUrl = `https://wa.me/${adminNumber}?text=${encodeURIComponent(adminMessage)}`;
      
    
      // Open WhatsApp for admin (in background)
      window.open(adminWhatsappUrl, '_blank');

      setPaymentSuccess(true);
    } catch (error) {
      console.error('Error updating order status:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!selectedService) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
          <div className="text-center">
            <FaCheckCircle className="mx-auto text-green-500 text-5xl mb-4" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Payment Successful!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for your purchase. We've sent a confirmation to your WhatsApp.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <button
              onClick={() => navigate('/')}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
          Complete Your Booking
        </h1>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Service Summary</h2>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{selectedService.title}</h3>
                <p className="text-gray-600">{selectedService.description}</p>
              </div>
              <div className="text-xl font-bold text-indigo-600">
                ${selectedService.price}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number (for WhatsApp confirmation)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="targetRole" className="block text-sm font-medium text-gray-700">
                  Target Role/Position
                </label>
                <input
                  type="text"
                  name="targetRole"
                  id="targetRole"
                  required
                  value={formData.targetRole}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {selectedService.requiresCV && (
                <div>
                  <label htmlFor="cvFile" className="block text-sm font-medium text-gray-700">
                    Upload Your CV (PDF, DOC, DOCX)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <FaFileAlt className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="cvFile"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="cvFile"
                            name="cvFile"
                            type="file"
                            required={selectedService.requiresCV}
                            onChange={handleFileChange}
                            className="sr-only"
                            accept=".pdf,.doc,.docx"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                    </div>
                  </div>
                  {formData.cvFile && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected file: {formData.cvFile.name}
                    </p>
                  )}
                </div>
              )}

              {selectedService.requiresLinkedIn && (
                <div>
                  <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700">
                    LinkedIn Profile URL
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLinkedin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      name="linkedinUrl"
                      id="linkedinUrl"
                      required={selectedService.requiresLinkedIn}
                      value={formData.linkedinUrl}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="block w-full pl-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {isProcessing ? 'Processing...' : `Pay $${selectedService.price}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Load Paystack script */}
      <script src="https://js.paystack.co/v1/inline.js" />
    </div>
  );
};

export default ResumeCart;