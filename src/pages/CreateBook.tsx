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
    <div className="max-w-xl mx-auto p-4 font-serif">
      <form onSubmit={handleSubmit} className="space-y-4 border-2 p-5 border-gray-900 rounded-lg">
      <h1 className="text-xl font-bold mb-4 text-center">Add New Book</h1>
      <div>
        <p>Title</p>
        <input
          className="border p-2 w-full rounded-lg border-gray-900"
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
        <div>
          <h1>Author</h1>
          <input
          className="border p-2 w-full rounded-lg border-gray-900"
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        </div>
        <div>
          <h1>Genre</h1>
          <input
          className="border p-2 w-full rounded-lg border-gray-900"
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />
        </div>
        <div>
          <h2>ISBN Number</h2>
          <input
          className="border p-2 w-full rounded-lg border-gray-900"
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={handleChange}
          required
        />
        </div>
        <input
          className="border p-2 w-full rounded-lg border-gray-900"
          type="number"
          name="copies"
          min={0}
          placeholder="Copies"
          value={formData.copies}
          onChange={handleChange}
          required
        />
        <textarea
          className="border p-2 w-full rounded-lg border-gray-900"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        
        <button className="bg-gray-900 text-white px-4 py-2 rounded w-full" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}
