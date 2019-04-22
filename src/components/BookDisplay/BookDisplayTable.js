import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookDisplayRow from './BookDisplayRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import './BookDisplay.css';

// declarations for table styles
const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

class BookDisplayTable extends Component {

    componentDidMount() {
        this.getBook();
    }

    getBook = () => {
        const action = {type: 'FETCH_BOOKS'};
        this.props.dispatch(action);
    }

    searchBooks = () => {
        this.props.history.push('/search');
    }

    render() {
        return (
            <div className="Book">
                <pre>{JSON.stringify(this.props.reduxState.bookList)}</pre>
    <Paper>
      <Table>
        <TableHead>
          <TableRow position="fixed">
            <CustomTableCell align="left">Book Title</CustomTableCell>
            <CustomTableCell align="left">Author Name</CustomTableCell>
            <CustomTableCell align="left">Category</CustomTableCell>
            <CustomTableCell align="left">Remove Book</CustomTableCell>
            <CustomTableCell align="left">Edit</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                {this.props.reduxState.bookList.map((book, id) => {
                      return (<BookDisplayRow history={this.props.history}
                                 key={id} book={book} />);
                    })}
        </TableBody>
        </Table>
        </Paper>
        <br></br>
        <Button onClick={this.searchBooks}>SEARCH YOUR COLLECTION</Button>
        </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(BookDisplayTable);