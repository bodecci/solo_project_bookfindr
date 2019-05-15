import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class EditBook extends Component {
    constructor(props){
        super(props);

        this.state = {
            editBookTitle: ''
        }
    }

    handleEditChange = (event) => {
        this.setState({
            editBookTitle: event.target.value
        });
    }

    editBook = (event) => {
        event.preventDefault();
        console.log('editBook: ', this.state.editBookTitle);

        this.props.dispatch({type: 'EDIT_BOOKS', 
                            payload: this.state.editBookTitle});

        this.setState({
            editBookTitle:''
        });
    }

    render(){
        return(
            <div>
            <pre>{JSON.stringify(this.props.reduxState.bookList)}</pre>
            <form onSubmit={this.editBook}>
                <FormControl>
                    <p><b>Edit Book Title</b></p>
                <TextField
                        id="Book_Title"
                        placeholder="Book Title"
                        margin="normal"
                        variant="filled"
                        type="text" onChange={this.handleEditChange} 
                        value={this.state.editBookTitle} />
                            <Button type="submit" className="button" variant="contained" 
                                color="primary">
                                ENTER
                            </Button>
                </FormControl>
            </form>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps) (EditBook);

