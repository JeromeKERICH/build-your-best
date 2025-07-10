import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Coaching', to: '/coaching' },
    { name: 'Shop', to: '/shop' },
    { name: 'Blog', to: '/blogs' },
    { name: 'Community', to: '/community' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-[#F7D9D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
        <div className="flex items-center">
          
          <div className="flex flex-row items-center">
            
            <div className="text-3xl font-bold tracking-tighter text-gray-900">BYBS</div>
            
            
            <div className={`h-8 w-px bg-gray-400 ${window.innerWidth < 640 ? 'mx-2' : 'mx-4'}`}></div>
            
            
            <div className="text-xs lowercase tracking-[0.3em] text-left text-gray-600 whitespace-nowrap">
              <span>Build Your</span> <br/>
              <span className={window.innerWidth < 640 ? 'ml-0.5' : 'ml-1'}>Best Self</span>
            </div>
          </div>
        </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="px-4 py-2 text-[#3A3A3A] hover:text-[#B76E79] font-medium rounded-lg transition-all duration-200 hover:bg-[#F7E8E8]"
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-[#F7D9D9]">
              <Link
                to="/book"
                className="bg-[#B76E79] hover:bg-[#9E5A63] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Book a Session
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#3A3A3A] hover:text-[#B76E79] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#B76E79] transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="pt-2 pb-4 px-4 space-y-1 bg-[#F5EFE7] shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="block px-4 py-3 text-[#3A3A3A] hover:text-[#B76E79] hover:bg-[#F7D9D9] rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/book"
            className="block w-full text-center bg-[#B76E79] hover:bg-[#9E5A63] text-white px-4 py-3 rounded-lg font-medium mt-2 shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Book a Session
          </Link>
        </div>
      </div>
    </nav>
  );
}