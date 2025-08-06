import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { supabase } from '../library/supabaseClient';

export default function BookingModal({ isOpen, onClose, packageName }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    package: packageName
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Insert into Supabase
    const { error } = await supabase.from('bookings').insert([formData]);

    if (error) {
      throw error;
    }

    // If insert is successful
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      package: packageName
    });

  } catch (error) {
    console.error('Error submitting to Supabase:', error.message);
    // Optionally: show an error UI or toast here
  } finally {
    setIsSubmitting(false);
  }
};

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes className="h-6 w-6" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Book {packageName}
          </h2>
          <p className="text-gray-600 mb-6">
            Fill out the form below and we'll get back to you shortly to confirm your session.
          </p>

          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Booking Request Sent!</h3>
              <p className="text-gray-600 mb-6">
                We've received your request and will contact you shortly to confirm your session details.
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#00337C] text-white rounded-lg hover:bg-[#1E4B9E] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00337C] focus:border-[#00337C]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00337C] focus:border-[#00337C]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00337C] focus:border-[#00337C]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00337C] focus:border-[#00337C]"
                  placeholder="Preferred dates/times, specific goals, etc."
                />
              </div>

              <input type="hidden" name="package" value={packageName} />

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg font-medium text-white ${isSubmitting ? 'bg-[#00337C]/70' : 'bg-[#00337C] hover:bg-[#1E4B9E]'} transition-colors`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Booking Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}