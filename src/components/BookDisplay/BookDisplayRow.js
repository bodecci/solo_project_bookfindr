import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert';




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

            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Poof! Book deleted!", {
                        icon: "success",
                        });
                    } else {
                        swal("Book is Safe");
                    }
                });

        console.log('payload: ', this.props.book.ID);
        const action ={type: 'DELETE_BOOKS', payload: this.props.book.ID};
        
        this.props.dispatch(action);
    }

    handleEditClick = () => {
        const editedBook = prompt('Enter New Book Title: ');
        if(editedBook != null){
        console.log('editedBook: ', editedBook);

        this.props.dispatch({
            type: 'EDIT_BOOKS',
            payload: {title:editedBook, id:this.props.book.ID}
        });
    }

    }


    

    render(){

        return(

            <TableRow>
              <CustomTableCell align="left"><div>{this.props.book.Book_Title}</div></CustomTableCell>
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
              <button onClick={this.handleEditClick}>EDIT</button>
              </CustomTableCell>
            </TableRow>


             

        );
    }
}

export default connect() (BookDisplayRow);