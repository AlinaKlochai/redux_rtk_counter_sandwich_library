import { FormEvent, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';

import Book from './Book';
import { addBook } from '../redux_rtk/librarySlice';
import { RootState } from '../redux_rtk/storeRTK';

const Library = () => {
     const[title, setTitle] = useState<string>('');
     const[author, setAuthor] = useState<string>('');
     const[year, setYear] = useState<number>(0);

     const books = useSelector((state: RootState) => state.library.books);
     const dispatch = useDispatch();


     const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch( addBook({ title, author, year })  );
        setTitle('');
        setAuthor('');
        setYear(0);
     };

    return (
        <div className='libraryDiv'>

            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:
                 <input type='text'placeholder='Title' value={title} onChange={( e => setTitle(e.target.value))}/>   
                </label>
                <label>Author:
                  <input type='text' placeholder='Author' value={author} onChange={(e => setAuthor(e.target.value))}/>   
                </label>
               <label>Year:
                 <input type='text'placeholder='Year' value={year} onChange={(e => setYear(+e.target.value))} />    
               </label>
               
                <button>Add Book</button>
            </form>

            <h2>Book List:</h2>
            <ul>
                {books.map(book => (
                    <Book key ={book.isbn} info={book} />

                ))}
            </ul>
            {/* <div>
                <h3>Add a new book:</h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Year"
                    value={newBook.year}
                    onChange={(e) => setNewBook({ ...newBook, year: parseInt(e.target.value) })}
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                />
                <button onClick={addBookToLibrary}>Add book to library</button>
            </div>
            <div>
                <h3>Edit a book:</h3>
                <input
                    type="text"
                    placeholder="ISBN"
                    value={editBook.isbn}
                    onChange={(e) => setEditBook({ ...editBook, isbn: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Title"
                    value={editBook.title}
                    onChange={(e) => setEditBook({ ...editBook, title: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Year"
                    value={editBook.year}
                    onChange={(e) => setEditBook({ ...editBook, year: parseInt(e.target.value) })}
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={editBook.author}
                    onChange={(e) => setEditBook({ ...editBook, author: e.target.value })}
                />
                <button onClick={editBookInLibrary}>Edit information about book</button>
            </div> */}
        </div>
    );
};

export default Library;
