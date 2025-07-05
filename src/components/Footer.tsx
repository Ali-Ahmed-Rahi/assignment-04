import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo and Description */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">MyBrand</h2>
          <p className="text-sm text-gray-400">
            Empowering solutions for modern web development.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><Facebook /></a>
            <a href="#" className="hover:text-blue-400"><Twitter /></a>
            <a href="#" className="hover:text-pink-500"><Instagram /></a>
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
