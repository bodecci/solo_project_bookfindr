import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

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
        console.log('searchBook: ', this.state.searchBook);
        
        this.props.dispatch({type: 'SEARCH_BOOKS', payload: this.state.searchBook});
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
                <pre>{JSON.stringify(this.props.reduxState.bookList)}</pre>
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
                </div>
            

        )
    }
    
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Search);