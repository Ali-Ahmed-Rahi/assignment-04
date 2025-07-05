import React from "react";
import { useGetBooksQuery, useDeleteBookMutation } from "../api/bookApi";
import { useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import { Book, Pencil, Trash } from "lucide-react";
import Swal from "sweetalert2";

export default function AllBooks() {
  const { data: books, isLoading, error } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

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
    <div className="p-4 max-w-7xl mx-auto mb-5 font-serif">
      <h1 className="text-2xl font-bold mb-6 text-center">Books List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books?.map((book) => (
          <div
            key={book._id}
            className="bg-white shadow-lg rounded-lg p-4  border-gray-900 hover:shadow-xl transition flex md:flex-col justify-between border"
          >
            <div>
              <h2 className="text-xl font-semibold mb-1">{book.title}</h2>
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-semibold">Author:</span> {book.author}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-semibold">Genre:</span> {book.genre}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-semibold">ISBN:</span> {book.isbn}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-semibold">Copies:</span> {book.copies}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                <span className="font-semibold">Available:</span>{" "}
                {book.available ? "Yes" : "No"}
              </p>
            </div>

            <div className="flex flex-col md:gap-2 gap-5 font-semibold ">
              <div>
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 w-full hidden md:block"
                  onClick={() => navigate(`/edit-book/${book._id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-blue-600 text-white p-2  hover:bg-blue-700 rounded-full md:hidden block"
                  onClick={() => navigate(`/edit-book/${book._id}`)}
                >
                  <Pencil></Pencil>
                </button>
              </div>

              <div>
                <button
                  className="bg-green-600 text-white px-3 py-1 w-full rounded hover:bg-green-700 hidden md:block"
                  onClick={() => navigate(`/borrow/${book._id}`)}
                >
                  Borrow
                </button>

                <button
                  className="bg-green-600 text-white p-2 hover:bg-green-700 rounded-full md:hidden block"
                  onClick={() => navigate(`/borrow/${book._id}`)}
                >
                  <Book />
                </button>
              </div>
              <div>
                <button
                  className="bg-red-600 text-white px-3 py-1 w-full rounded hover:bg-red-700 hidden md:block"
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#d33",
                      cancelButtonColor: "#3085d6",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        deleteBook(book._id!);
                        Swal.fire(
                          "Deleted!",
                          "Book has been deleted.",
                          "success"
                        );
                      }
                    });
                  }}
                >
                  Delete
                </button>
                <button
                  className="bg-red-600 text-white p-2 w-full rounded-full hover:bg-red-700 md:hidden block"
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#d33",
                      cancelButtonColor: "#3085d6",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        deleteBook(book._id!);
                        Swal.fire(
                          "Deleted!",
                          "Book has been deleted.",
                          "success"
                        );
                      }
                    });
                  }}
                >
                  <Trash></Trash>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
