import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllBooks from './pages/AllBooks';
import CreateBook from './pages/CreateBook';
import EditBook from './pages/EditBook';
import BorrowBook from './pages/BorrowBook';
import BorrowSummary from './pages/BorrowSummary';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
        <Route path="/borrow/:bookId" element={<BorrowBook />} />
        <Route path="/borrow-summary" element={<BorrowSummary />} />
      </Routes>
    </BrowserRouter>
  );
}
