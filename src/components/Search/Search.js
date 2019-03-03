import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchTable from './SearchTable';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


class Search extends Component {
    constructor (props){
        super(props);

        this.state = {
            searchBook: {
                title: ''
            }
        }
    }
    //dispatches updated book
    searchBook = (event) => {
        console.log('Form submitted in Update');
        event.preventDefault();
        console.log('searchBook: ', this.state.searchBook.title + '%');
        
        this.props.dispatch({type: 'SEARCH_BOOKS', payload: this.state.searchBook.title});
        this.setState({
            searchBook: {
                title: ''
            }
        });
        
    }

    handleChange = (event) => {
        this.setState({
            searchBook: {
                ...this.state.searchBook,
                title: event.target.value
            }
        });
    }

    render() {
        return (
                <div>
                {/* <pre>{JSON.stringify(this.props.reduxState.bookList)}</pre> */}
                <form onSubmit={this.searchBook}>
                    <FormControl>
                    <p>Search Your Collection</p>
                    <TextField
                        id="Book_Title"
                        placeholder=" Search Book Title"
                        margin="normal"
                        variant="filled"
                        type="text" onChange={this.handleChange} 
                        value={this.state.searchBook.title} />

                        <Button variant="contained" color="default" 
                        type= "Submit">
                        SEARCH</Button>
                        </FormControl>
                </form>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                 <CustomTableCell align="left">Title</CustomTableCell>
                                <CustomTableCell align="left">Author</CustomTableCell>
                                <CustomTableCell align="left">ISBN</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                             {/* Render each item from the zooAnimal reducer */}
                             {this.props.reduxState.bookList.map((book, i) => {
                                return (<SearchTable key={i} book={book} />);
                                    })}
                        </TableBody>
                    </Table>
                </Paper>

                </div>
            

        )
    }
    
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Search);