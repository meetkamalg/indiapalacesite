import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-400 text-white py-4 w-full">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-8"> {/* Ensuring space between logo and nav links */}
          {/* Logo with link to home */}
          <Link href="/">
              <img src="/India Palace logo.png" alt="India Palace Logo" className="h-10 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4"> {/* Hidden on small screens and flex on medium and up */}
            <Link href="/" className="hover:text-gray-300 cursor-pointer">Home</Link>
            <Link href="/contact" className="hover:text-gray-300 cursor-pointer">Contact</Link>
            <Link href="/menu" className="hover:text-gray-300 cursor-pointer">The Menu</Link>
            <Link href="/calendar" className="hover:text-gray-300 cursor-pointer">Reservations</Link>
          </div>
        </div>

        {/* Right Section - Action Button and Avatar */}
        <div className="flex items-center space-x-4">
          {/* Action Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Order Now
          </button>
          {/* User Avatar placeholder */}
          <div className="rounded-full border-2 border-white h-10 w-10 flex items-center justify-center">
            <span>U</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
