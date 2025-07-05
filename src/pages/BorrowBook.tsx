import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetBookQuery, useBorrowBookMutation } from '../api/bookApi';
import { ClockLoader } from 'react-spinners';

export default function BorrowBook() {
  const { bookId } = useParams<{ bookId: string }>();
  const { data: book, isLoading } = useGetBookQuery(bookId!);
  const [borrowBook] = useBorrowBookMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    quantity: 1,
    dueDate: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantity' ? Number(value) : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!book) return;
    if (formData.quantity > book.copies) {
      alert('Not enough copies available');
      return;
    }

    await borrowBook({ ...formData, bookId:bookId! });
    navigate('/borrow-summary');
  }

  if (isLoading || !book) return <p className="flex justify-center items-center h-screen">
        <ClockLoader size={50} color="#2563EB" />
      </p>; 

  return (
    <div className="max-w-xl mx-auto p-4 font-serif md:pt-28">

      <form onSubmit={handleSubmit} className="space-y-4 border-2 p-5 border-gray-900 rounded-lg font-lg">
      <h1 className="text-xl  mb-4 text-center">Borrow /..{book.title}../</h1>
        <input
          type="number"
          name="quantity"
          min={1}
          max={book.copies}
          value={formData.quantity}
          onChange={handleChange}
          className="border p-2 w-full rounded-lg border-gray-900"
          placeholder="Quantity"
          required
        />
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="border p-2 w-full rounded-lg border-gray-900"
          required
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
          type="submit"
        >
          Confirm Borrow
        </button>
      </form>
    </div>
  );
}
