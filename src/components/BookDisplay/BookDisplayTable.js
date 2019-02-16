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
        const action = {type: 'FETCH_BOOKS'};
        this.props.dispatch(action);
        // axios({
        //     method: 'GET',
        //     url: '/api/addbooks'
        // }).then((response) => {
        //     const action = {type: 'SET_BOOKS', payload: response.data};
        //     this.props.dispatch(action);
        // }).catch((error) => {
        //     console.log('Error in GET: ', error);
        //     alert('Something Went Wrong!')
        // });
    }

    render() {
        return (
            <div className="Book">
                <pre>{JSON.stringify(this.props.reduxState.bookList)}</pre>
                <table className="books">
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Author Name</th>
                        <th>Category</th>
                        <th>Remove Book</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.reduxState.bookList.map((book, id) => {
                      return (<BookDisplayRow key={id} book={book} />);
                    })}
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