import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

class BookDisplayRow extends Component {

    deleteBook = () => {
        console.log('payload: ', this.props.book.ID);
        const action ={type: 'DELETE_BOOKS', payload: this.props.book.ID};
        
        this.props.dispatch(action);
    }

    

    render(){
        return(

            <TableRow>
              <CustomTableCell align="left">{this.props.book.Book_Title}</CustomTableCell>
              <CustomTableCell align="left">{this.props.book.Author_Name}</CustomTableCell>
              <CustomTableCell align="left">{this.props.book.Category}</CustomTableCell>
              <CustomTableCell align="left">
                                <Button type='Delete'
                                color="secondary"
                                onClick={this.deleteBook}>
                                Delete</Button>
              </CustomTableCell>
            </TableRow>
        );
    }
}

export default connect() (BookDisplayRow);