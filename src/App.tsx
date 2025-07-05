import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllBooks from "./pages/AllBooks";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import BorrowBook from "./pages/BorrowBook";
import BorrowSummary from "./pages/BorrowSummary";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col ">

        <Navbar />

        <main className="flex-1 bg-white">
          <Routes>
            <Route path="/" element={<Navigate to="/books" />} />
            <Route path="/books" element={<AllBooks />} />
            <Route path="/create-book" element={<CreateBook />} />
            <Route path="/edit-book/:id" element={<EditBook />} />
            <Route path="/borrow/:bookId" element={<BorrowBook />} />
            <Route path="/borrow-summary" element={<BorrowSummary />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
