import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetBookQuery, useUpdateBookMutation } from '../api/bookApi';

export default function EditBook() {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading } = useGetBookQuery(id!);
  const [updateBook] = useUpdateBookMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    isbn: '',
    description: '',
    copies: 1,
  });

  useEffect(() => {
  if (book) {
    setFormData({
      title: book.title,
      author: book.author,
      genre: book.genre,
      isbn: book.isbn,
      description: book.description || '',
      copies: book.copies,
    });
  }
}, [book]);


  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'copies' ? Number(value) : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await updateBook({ id: id!, ...formData });
    navigate('/books');
  }

  if (isLoading) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Edit Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 w-full"
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 w-full"
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 w-full"
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={handleChange}
          required
        />
        <textarea
          className="border p-2 w-full"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full"
          type="number"
          name="copies"
          min={0}
          placeholder="Copies"
          value={formData.copies}
          onChange={handleChange}
          required
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          type="submit"
        >
          Update Book
        </button>
      </form>
    </div>
  );
}
