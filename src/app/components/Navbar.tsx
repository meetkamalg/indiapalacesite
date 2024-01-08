
import Link from 'next/link';
import { FaHome, FaPhone, FaConciergeBell, FaCalendarAlt, FaUserCircle, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-400 text-white py-4 w-full">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-8">
          <Link href="/">
              <img src="/India Palace logo.png" alt="India Palace Logo" className="h-10 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="hover:text-gray-300 cursor-pointer flex items-center">
                <FaHome className="mr-2" /> Home
            </Link>
            <Link href="/contact" className="hover:text-gray-300 cursor-pointer flex items-center">
                <FaPhone className="mr-2" /> Contact
            </Link>
            <Link href="/menu" className="hover:text-gray-300 cursor-pointer flex items-center">
                <FaConciergeBell className="mr-2" /> Menu
            </Link>
            <Link href="/catering"className="hover:text-gray-300 cursor-pointer flex items-center">
                <FaCalendarAlt className="mr-2" /> Catering
            </Link>
          </div>
        </div>

        {/* Right Section - Action Button and Avatar */}
        <div className="flex items-center space-x-4">
          {/* Action Button */}
          <Link href="/menu"className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
              Order Now
          </Link>
          {/* User Avatar placeholder */}
          <div className="rounded-full border-2 border-white h-10 w-10 flex items-center justify-center">
            <FaUserCircle size="1.5em" />
          </div>

          {/* Cart Icon */}
          <div className="cursor-pointer">
            <Link href="/cart" className="hover:text-gray-300">
                <FaShoppingCart size="1.5em" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
