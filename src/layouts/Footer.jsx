import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3A3A3A] text-[#F5EFE7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#F7D9D9]">About Brenda</h3>
            <p className="text-sm">
              Helping women reclaim their power and build the life they deserve through purpose-led coaching and practical tools.
            </p>
            <div className="pt-2">
              {/* Replace with your logo or signature */}
              <span className="text-2xl font-bold text-[#B76E79]">BuildYourBest</span>
            </div>
            <p className="italic text-[#B89CA5]">
              "Build your best, from the inside out."
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#F7D9D9]">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Coaching', 'Shop', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="text-sm hover:text-[#B76E79] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#F7D9D9]">Resources</h3>
            <ul className="space-y-2">
              {['FAQs', 'Free Downloads', 'Join the Community', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(' ', '-').replace('&', 'and')}`}
                    className="text-sm hover:text-[#B76E79] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#F7D9D9]">Stay Connected</h3>
            <div>
              <p className="text-sm mb-2">Get weekly inspiration + tools</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-sm text-[#fff] border border-white rounded-l-md focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-[#B76E79] hover:bg-[#B89CA5] text-white px-3 py-2 text-sm rounded-r-md transition-colors duration-200"
                >
                  Join
                </button>
              </form>
            </div>
            <div className="pt-2">
              <div className="flex space-x-4">
                <a href="#" className="text-[#F5EFE7] hover:text-[#B76E79] transition-colors duration-200">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-[#F5EFE7] hover:text-[#B76E79] transition-colors duration-200">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-[#F5EFE7] hover:text-[#B76E79] transition-colors duration-200">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-[#F5EFE7] hover:text-[#B76E79] transition-colors duration-200">
                  <FaYoutube size={20} />
                </a>
                <a href="#" className="text-[#F5EFE7] hover:text-[#B76E79] transition-colors duration-200">
                  <FaWhatsapp size={20} />
                </a>
                <a href="#" className="text-[#F5EFE7] hover:text-[#B76E79] transition-colors duration-200">
                  <HiOutlineMail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#2A2A2A] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© {currentYear} Build Your Best — All rights reserved.</p>
            <p className="mt-2 md:mt-0 text-[#B89CA5]">
              Designed by Emmanuel Kerich 😉
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}