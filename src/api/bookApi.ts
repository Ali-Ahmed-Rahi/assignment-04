import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBook, IBorrowSummary, IBorrowRequest } from '../types';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://backend-phi-two-31.vercel.app/api' }),
  tagTypes: ['Book', 'Borrow'],
  endpoints: (build) => ({
    getBooks: build.query<IBook[], void>({
      query: () => 'books',
      providesTags: ['Book'],
    }),
    getBook: build.query<IBook, string>({
      query: (id) => `books/${id}`,
      providesTags: ['Book'],
    }),
    createBook: build.mutation<IBook, Partial<IBook>>({
      query: (body) => ({
        url: 'books',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Book'],
    }),
    updateBook: build.mutation<IBook, Partial<IBook> & { id: string }>({
      query: ({ id, ...body }) => ({
        url: `books/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Book'],
    }),
    deleteBook: build.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Book'],
    }),
    borrowBook: build.mutation<any, IBorrowRequest>({
      query: (body) => ({
        url: 'borrow',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Book', 'Borrow'],
    }),
    getBorrowSummary: build.query<IBorrowSummary[], void>({
      query: () => 'borrow-summary',
      providesTags: ['Borrow'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
} = bookApi;
