import React from 'react';
import { useGetBooksQuery, useDeleteBookMutation } from '../api/bookApi';
import { useNavigate } from 'react-router-dom';

export default function AllBooks() {
  const { data: books, isLoading, error } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

  if (isLoading) return <p className="p-4">Loading books...</p>;
  if (error) return <p className="p-4">Error loading books</p>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Books List</h1>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Author</th>
            <th className="border p-2">Genre</th>
            <th className="border p-2">ISBN</th>
            <th className="border p-2">Copies</th>
            <th className="border p-2">Available</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <tr key={book._id}>
              <td className="border p-2">{book.title}</td>
              <td className="border p-2">{book.author}</td>
              <td className="border p-2">{book.genre}</td>
              <td className="border p-2">{book.isbn}</td>
              <td className="border p-2">{book.copies}</td>
              <td className="border p-2">{book.available ? 'Yes' : 'No'}</td>
              <td className="border p-2 space-x-2">
                <button
                  className="bg-blue-600 text-white px-2 py-1 rounded"
                  onClick={() => navigate(`/edit-book/${book._id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => {
                    if (window.confirm('Are you sure to delete?')) deleteBook(book._id!);
                  }}
                >
                  Delete
                </button>
                <button
                  className="bg-green-600 text-white px-2 py-1 rounded"
                  onClick={() => navigate(`/borrow/${book._id}`)}
                >
                  Borrow
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
