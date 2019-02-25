import React from 'react';
import BookDisplayTable from '../BookDisplay/BookDisplayTable';
import AddBook from '../AddBook/AddBook';
import { connect } from 'react-redux';

const BookCollection = props => (
    <div>
        <h3>Your Book Collection!</h3>
        {/* <pre>{this.props.user.id}</pre> */}
        <BookDisplayTable history={props.history} />
        <AddBook />
    </div>
);

export default connect() (BookCollection);