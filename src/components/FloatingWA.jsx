import { FaComment, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '211921650576';
  const message = encodeURIComponent("Hi Brenda Viola, I came across your website and would like to learn more about your coaching services. Could you please share more information?");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="animate-fade-in-up bg-white rounded-lg shadow-xl overflow-hidden w-72">
          <div className="bg-[#B76E79] p-3 flex justify-between items-center">
            <h3 className="text-white font-medium">Chat with Us</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <FaTimes />
            </button>
          </div>
          <div className="p-4">
            <p className="text-[#5A5A5A] mb-4">
              Click below to message Brenda directly on WhatsApp:
            </p>
            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] hover:bg-[#9E5A63] text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
            >
              <FaComment className="mr-2" />
              Start Chat
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#B76E79] hover:bg-[#9E5A63] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-3 flex items-center"
        >
          <div className="relative">
            <FaComment className="text-xl" />
            
          </div>
          <span className="ml-2 font-medium hidden sm:inline-block">Message Us</span>
        </button>
      )}
    </div>
  );
}