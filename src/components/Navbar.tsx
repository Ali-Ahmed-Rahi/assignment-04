import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b shadow-sm bg-gray-900 text-white relative z-50">
      <div className="mx-auto flex items-center justify-between py-4 px-4 max-w-7xl">
        {/* Logo */}
        <Link to="/books" className="text-xl font-bold flex items-center gap-3">
          <img
            src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png"
            alt="Logo"
            className="h-12 w-auto animate-spin rounded-full"
          />
          <h2>Gufia Library</h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center font-bold">
          <Link to="/books" className="hover:underline">All Books</Link>
          <span>/</span>
          <Link to="/create-book" className="hover:underline">Add Book</Link>
          <span>/</span>
          <Link to="/borrow-summary" className="hover:underline">Borrow Summary</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Popup Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-start justify-end md:hidden z-50">
          <div className="w-3/4 max-w-xs bg-gray-800 h-full shadow-lg p-6 animate-slide-in">
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button onClick={() => setIsOpen(false)}>
                <X size={28} className="text-white" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col space-y-4 font-semibold text-white">
              <Link to="/books" onClick={() => setIsOpen(false)} className="hover:underline">
                All Books
              </Link>
              <Link to="/create-book" onClick={() => setIsOpen(false)} className="hover:underline">
                Add Book
              </Link>
              <Link to="/borrow-summary" onClick={() => setIsOpen(false)} className="hover:underline">
                Borrow Summary
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
