import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

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
    constructor(props){
        super(props);

        this.state = {
            open: false
        }
    }

    deleteBook = () => {
        console.log('payload: ', this.props.book.ID);
        const action ={type: 'DELETE_BOOKS', payload: this.props.book.ID};
        
        this.props.dispatch(action);
    }

    editBook = () => {
        console.log('');
        
    }

    

    render(){
        return(

            <TableRow>
              <CustomTableCell align="left">{this.props.book.Book_Title}</CustomTableCell>
              <CustomTableCell align="left">{this.props.book.Author_Name}</CustomTableCell>
              <CustomTableCell align="left">{this.props.book.Category}</CustomTableCell>
              <CustomTableCell align="left">

                    <IconButton color="secondary" onClick={this.deleteBook} 
                                aria-label="Delete">
                         <DeleteIcon />
                    </IconButton>
                                {/* <Button type='Delete'
                                color="secondary"
                                onClick={this.deleteBook}>
                                Delete</Button> */}
              </CustomTableCell>
              <CustomTableCell align="left">
              <button onClick={this.editBook}>EDIT</button>
              </CustomTableCell>
            </TableRow>
        );
    }
}

export default connect() (BookDisplayRow);