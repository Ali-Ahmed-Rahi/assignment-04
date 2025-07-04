import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-6">
      <Link to="/books" className="hover:underline">
        All Books
      </Link>
      <Link to="/create-book" className="hover:underline">
        Add Book
      </Link>
      <Link to="/borrow-summary" className="hover:underline">
        Borrow Summary
      </Link>
    </nav>
  );
}
