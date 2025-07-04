import React, { useState } from 'react';
import { useCreateBookMutation } from '../api/bookApi';
import { useNavigate } from 'react-router-dom';

export default function CreateBook() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    isbn: '',
    description: '',
    copies: 1,
  });

  const [createBook] = useCreateBookMutation();
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'copies' ? Number(value) : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await createBook(formData);
    navigate('/books');
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Add New Book</h1>
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
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}
