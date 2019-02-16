import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class BookDisplayRow extends Component {

    deleteBook = () => {
        console.log('payload: ', this.props.book.ID);
        const action ={type: 'DELETE_BOOKS', payload: this.props.book.ID};
        
        this.props.dispatch(action);
    }

    render(){
        return(

                <tr>
                    <td>{this.props.book.Book_Title}</td>
                    <td>{this.props.book.Author_Name}</td>
                    <td>{this.props.book.Category}</td>
                    <td>
                        <Button type='Delete'
                                color="secondary"
                                onClick={this.deleteBook}>
                                Delete</Button>
                    </td>
                </tr>
        );
    }
}

export default connect() (BookDisplayRow);