import React from 'react';
import BookDisplayTable from '../BookDisplay/BookDisplayTable';
// import AddBook from '../AddBook/AddBook';
import { connect } from 'react-redux';
import Search from '../Search/Search'

const BookCollection = props => (
    <div>
        <h3>Your Book Collection! </h3>
        {/* <pre>{this.props.user.id}</pre> */}
        <button className="bttn">SEARCH YOUR Collection</button>
        <BookDisplayTable history={props.history} />
        {/* <AddBook /> */}
    </div>
);

export default connect() (BookCollection);