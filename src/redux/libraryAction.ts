/*
1. add book;
2. delete book;
3. edit book
*/

export type Book = {
    isbn: string // (unique)
    title: string
    year: number
    author: string
};

export type libraryAction =
    | { type: 'library/add', payload: Omit<Book, 'isbh'> }
    | { type: 'library/edit', payload: Book }
    | { type: 'library/delete', payload: string }