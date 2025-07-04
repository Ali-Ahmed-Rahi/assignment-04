import React from 'react';
import { useGetBorrowSummaryQuery } from '../api/bookApi';

export default function BorrowSummary() {
  const { data: summary, isLoading, error } = useGetBorrowSummaryQuery();

  if (isLoading) return <p className="p-4">Loading summary...</p>;
  if (error) return <p className="p-4">Error loading summary</p>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Borrow Summary</h1>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Book Title</th>
            <th className="border p-2">ISBN</th>
            <th className="border p-2">Total Quantity Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {summary?.map((item) => (
            <tr key={item._id}>
              <td className="border p-2">{item.bookTitle}</td>
              <td className="border p-2">{item.isbn}</td>
              <td className="border p-2">{item.totalQuantityBorrowed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
