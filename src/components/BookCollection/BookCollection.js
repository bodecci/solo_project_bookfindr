import React from 'react';
import BookDisplayTable from '../BookDisplay/BookDisplayTable';
import AddBook from '../AddBook/AddBook';
import { connect } from 'react-redux';

const BookCollection = props => (
    <div>
        <h3>This is the Book Collection in the Library for</h3>
        {/* <pre>{this.props.user.id}</pre> */}
        <BookDisplayTable />
        <AddBook />
    </div>
);

export default connect() (BookCollection);