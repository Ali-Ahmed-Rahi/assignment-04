import React from "react";
import { useGetBorrowSummaryQuery } from "../api/bookApi";
import { ClockLoader } from "react-spinners";

export default function BorrowSummary() {
  const { data: summary, isLoading, error } = useGetBorrowSummaryQuery();

  if (isLoading)
    return (
      <p className="flex justify-center items-center h-screen">
        <ClockLoader size={50} color="#2563EB" />
      </p>
    );
  if (error)
    return (
      <p className="flex justify-center items-center h-screen">
        <ClockLoader size={50} color="#2563EB" />
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto p-4 font-serif">
      <h1 className="text-2xl font-bold mb-4 text-center">Borrow Summary</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {summary?.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md border border-gray-900 rounded-lg p-4 hover:shadow-lg transition "
          >
            <h2 className="text-lg font-semibold mb-2">{item.bookTitle}</h2>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-semibold">ISBN:</span> {item.isbn}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Total Borrowed:</span>{" "}
              {item.totalQuantityBorrowed}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
