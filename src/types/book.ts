export interface Book {
  id: number;
  title: string;
  author: string;
}

export interface BookState {
  books: Book[];
  loading: boolean;
  error: string | null;
}
