import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';

import './Addbook.css';

class AddBook extends Component {
    constructor(props){
        super(props);
        // setup local state to grab the details of the new book
        this.state = {
            newBook: {
                title: '',
                author: '',
                category: '',
                ISBN: ''
            }
        }
    }


    // dispatch the new book entered to the reducer
    addNewBook = (event) => {
        swal("Good Job!", "book added to library", "success");
        console.log('Form Submitted');
        event.preventDefault();
        console.log('newBook:', this.state.newBook);
        
        this.props.dispatch({type: 'ADD_BOOKS', payload: this.state.newBook});
        this.setState({
            newBook: {
                title: '',
                author: '',
                category: '',
                ISBN: ''
            }
        });
    }

    // grabs the new book enterd into collection
    // using React currying to grab all the inputs at once
    handleChange = propertyName => event => {
        this.setState({
            // ...this.state,
            newBook: {
                ...this.state.newBook,
                [propertyName]: event.target.value
            }
            
        });
    }



    render(){
        console.log(this.state);
        
        return(
            <div>

            

                <form onSubmit={this.addNewBook}>
                <FormControl>
                <p>Add Book</p>
                    <TextField
                        id="Book_Title"
                        placeholder="Book Title"
                        margin="normal"
                        variant="filled"
                        type="text" onChange={this.handleChange('title')} 
                        value={this.state.newBook.title} />
                    {/* <input type="text" onChange={this.handleChange('author')} 
                        value={this.state.newBook.author}
                        placeholder="Book Author" /> */}
                    <TextField
                        id="Book_Author"
                        label="Author"
                        placeholder="Book Author"
                        margin="normal"
                        variant="filled"
                        type="text" onChange={this.handleChange('author')} 
                        value={this.state.newBook.author} />
                    {/* <input type="text" onChange={this.handleChange('ISBN')} 
                        value={this.state.newBook.ISBN}
                        placeholder="ISBN #" /> */}
                    <TextField
                        id="ISBN"
                        label="ISBN"
                        placeholder="ISBN #"
                        margin="normal"
                        variant="filled"
                        type="text" onChange={this.handleChange('ISBN')} 
                        value={this.state.newBook.ISBN} />
                        <pre></pre>
                    <FormControl>
                    <InputLabel htmlFor="Category">Category</InputLabel>
                    <Select
                        value={this.state.newBook.category}
                        label="Category"
                        placeholder="Category"
                        onChange={this.handleChange('category')}
                        defaultValue={this.state.newBook.category} >
                            <MenuItem value="YA">YA</MenuItem>
                            <MenuItem value="Childrens">Childrens</MenuItem>
                            <MenuItem value="Fiction">Fiction</MenuItem>
                            <MenuItem value="Self Help">Self Help</MenuItem>
                            <MenuItem value="Biography">Biography</MenuItem>
                    </Select>
                    </FormControl>
                
                <Button className="button" variant="contained" color="default" 
                        type = "Submit">
                Add Book</Button>
                </FormControl>
                </form>
            </div>
        )
    }
}

export default connect() (AddBook);