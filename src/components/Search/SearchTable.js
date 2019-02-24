import React, { Component } from 'react';
import { connect } from 'react-redux';


class SearchTable extends Component {

    componentDidMount() {
        this.getSearchBook()
    }

    getSearchBook = () => {
        const action = {type: 'FETCH_BOOKS'}
    }

    render(){
        return(
            <div>
                <tr>
                    <td>{this.props.book.title}</td>
                    <td>{this.props.book.ISBN}</td>
                    <td>{this.props.book.name}</td>
                </tr>
            </div>
        )
    }
}

export default connect() (SearchTable);