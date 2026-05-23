import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SA</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">Shreesha Agro Enterprises</h1>
                <p className="text-xs text-gray-600">Reliable Farming Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`transition-colors ${
                  isActive("/") ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`transition-colors ${
                  isActive("/products") ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"
                }`}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`transition-colors ${
                  isActive("/about") ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`px-6 py-2 rounded-lg transition-colors ${
                  isActive("/contact")
                    ? "bg-green-600 text-white"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 transition-colors ${
                    isActive("/") ? "text-green-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 transition-colors ${
                    isActive("/products") ? "text-green-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 transition-colors ${
                    isActive("/about") ? "text-green-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="py-2 text-green-600 font-semibold"
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Shreesha Agro Enterprises</h3>
              <p className="text-gray-400 text-sm">
                Your trusted partner for reliable farming machines and agricultural solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <MapPin size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">
                    At/Po-Balitutha, Ps-Kujang<br />
                    Dist-Jagatsinghpur, Odisha<br />
                    Pin code - 754141
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={18} className="text-green-500 flex-shrink-0" />
                  <a
                    href="mailto:shubhasisnayak179@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    shubhasisnayak179@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Shreesha Agro Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
