import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo and Description */}
        <div className="flex-1">
          <Link
            to="/books"
            className="text-xl font-bold flex items-center gap-3"
          >
            <img
              src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png"
              alt="Logo"
              className="h-12 w-auto  rounded-full"
            />
            <h2>Gufia Library</h2>
          </Link>
          <p className="text-sm text-gray-400 md:mx-14">
            Empowering solutions for modern web development.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/books" className="hover:underline">All Books</Link>
            </li>
            <li>
               <Link to="/create-book" className="hover:underline">Add Book</Link>
            </li>
            <li>
              <Link to="/borrow-summary" className="hover:underline">Borrow Summary</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <Facebook />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
}
