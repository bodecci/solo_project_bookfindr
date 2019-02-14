import React from 'react';
import BookDisplayTable from '../BookDisplay/BookDisplayTable';
import AddBook from '../AddBook/AddBook';

const BookCollection = props => (
    <div>
        <h3>This is the Book Collection in the Library</h3>

        <BookDisplayTable />
        <AddBook />
    </div>
);

export default BookCollection;