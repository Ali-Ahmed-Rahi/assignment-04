export interface IBook {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}

export interface IBorrowRequest {
  bookId: string;
  quantity: number;
  dueDate: string;
}

export interface IBorrowSummary {
  _id: string;
  bookTitle: string;
  isbn: string;
  totalQuantityBorrowed: number;
}
