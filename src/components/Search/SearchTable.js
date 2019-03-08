import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

class SearchTable extends Component {

    componentDidMount() {
        this.getSearchBook()
    }

    getSearchBook = () => {
        const action = {type: 'FETCH_BOOKS'}
    }

    render(){
        return(
            
                <TableRow>
                    <CustomTableCell align="left">{this.props.book.title}</CustomTableCell>
                    <CustomTableCell align="left">{this.props.book.ISBN}</CustomTableCell>
                    <CustomTableCell align="left">{this.props.book.name}</CustomTableCell>
                </TableRow>
           
        )
    }
}

export default connect() (SearchTable);