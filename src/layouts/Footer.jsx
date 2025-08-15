import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';
import { supabase } from '../library/supabaseClient'; // Adjust path as needed
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email');
      return;
    }

    try {
      const { error: supabaseError } = await supabase
        .from('subscribers')
        .insert([{ 
          email: email,
          subscribed_at: new Date().toISOString(),
          source: 'website_footer'
        }]);

      if (supabaseError) throw supabaseError;

      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    } catch (err) {
      console.error('Subscription error:', err);
      setError('Failed to subscribe. Please try again.');
    }
  };

  return (
    <footer className="bg-gray-800 text-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">About Brenda</h3>
            <p className="text-sm">
              Helping women reclaim their power and build the life they deserve through purpose-led coaching and practical tools.
            </p>
            <div className="pt-2">
              <span className="text-2xl font-bold text-white">Build Your Best Self</span>
            </div>
            <p className="italic text-[#B89CA5]">
              "Build your best self, from the inside out."
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Coaching', 'Shop', 'Blogs', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm hover:text-[#1E40AF] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Resources</h3>
            <ul className="space-y-2">
              {['FAQs', 'Privacy', 'Terms'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(' ', '-').replace('&', 'and')}`}
                    className="text-sm hover:text-[#1E40AF] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Stay Connected</h3>
            <div>
              <p className="text-sm mb-2">Get weekly inspiration + tools</p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="px-3 py-2 text-sm text-[#fff] bg-transparent border border-[#F7D9D9] rounded-l-md focus:outline-none w-full"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-[#F7D9D9] px-3 py-2 text-sm rounded-r-md transition-colors duration-200 whitespace-nowrap"
                    disabled={subscribed}
                  >
                    {subscribed ? 'Thank You!' : 'Join'}
                  </button>
                </div>
                {error && <p className="text-red-400 text-xs">{error}</p>}
                {subscribed && <p className="text-green-400 text-xs">You're subscribed!</p>}
              </form>
            </div>
            <div className="pt-4">
              <h4 className="text-sm font-medium text-[#F7D9D9] mb-3">Connect with us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/buildyourbestself_25?igsh=ZmFjcTlrMDdtc2Fk" 
                  className="text-[#F7D9D9] hover:text-[#1E40AF] transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/share/15rD2aArYn/?mibextid=wwXIfr" 
                  className="text-[#F7D9D9] hover:text-[#1E40AF] transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a 
                  href="https://www.tiktok.com/@buildyourbestselfblog?_t=ZM-8yf0LRoJoT2&_r=1" 
                  className="text-[#F7D9D9] hover:text-[#1E40AF] transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <FaTiktok size={20} />
                </a>
                <a 
                  href="https://wa.me/211921650576" 
                  className="text-[#F7D9D9] hover:text-[#1E40AF] transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>
                <a 
                  href="mailto:info@buildyourbestselfblog.com" 
                  className="text-[#F7D9D9] hover:text-[#1E40AF] transition-colors duration-200"
                  aria-label="Email"
                >
                  <HiOutlineMail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-300 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-col md:flex-row md:space-x-4 text-center md:text-left">
              <p className='text-gray-900'>© {currentYear} Build Your Best — All rights reserved.</p>
              <div className="hidden md:block text-gray-900">|</div>
              <a href="/privacy" className="text-gray-900 transition-colors duration-200">Privacy Policy</a>
              <div className="hidden md:block text-gray-900">|</div>
              <a href="/terms" className="text-gray-900 transition-colors duration-200">Terms of Service</a>
            </div>
            <p className="mt-2 md:mt-0 text-gray-900">
              Designed by Emmanuel Kerich 😉
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}