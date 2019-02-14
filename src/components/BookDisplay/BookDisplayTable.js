import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookDisplayRow from './BookDisplayRow';
import axios from 'axios';

import './BookDisplay.css'

class BookDisplayTable extends Component {

    componentDidMount() {
        this.getBook();
    }

    getBook = () => {
        axios({
            method: 'GET',
            url: '/api/addbooks'
        }).then((response) => {
            const action = {type: 'SET_BOOKS', payload: response.data};
            this.props.dispatch(action);
        }).catch((error) => {
            console.log('Error in GET: ', error);
            alert('Something Went Wrong!')
        });
    }

    render () {
        return (
            <div className="Book">
                <h3>This is the Book Collection in the Library</h3>
                <pre>{JSON.stringify(this.props.reduxState.bookList)}</pre>
                <table className="books">
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Author Name</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.reduxState.bookList.map((book) =>
                        <BookDisplayRow key={book.id} book={book} />
                    )}
                </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(BookDisplayTable);