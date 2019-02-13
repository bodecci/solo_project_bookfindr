import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDisplayRow extends Component {

    render(){
        return(

                <tr>
                    <td>{this.props.book.Book_Title}</td>
                    <td>{this.props.book.Author_Name}</td>
                    <td>{this.props.book.Category}</td>
                </tr>
        );
    }
}

export default connect() (BookDisplayRow);