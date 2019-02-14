import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddBook extends Component {
    constructor(props){
        super(props);
        // setup local state to grab the details of the new book
        this.state = {
            newBook: {
                bookTitle: '',
                bookAuthor: '',
                bookCategory: '',
                ISBN: ''
            }
        }
    }

    // dispatch the new book entered to the reducer
    addNewBook = (event) => {
        console.log('Form Submitted');
        event.preventDefault();
        this.props.dispatch({type: 'ADD_BOOKS', payload: this.state.newBook});
        this.setState({
            newBook: {
                bookTitle: '',
                bookAuthor: '',
                bookCategory: '',
                ISBN: ''
            }
        });
    }

    // grabs the new book enterd into collection
    // using React currying to grab all the inputs at once
    handleChange = propertyName => event => {
        this.setState({
            [propertyName]:event.target.value
        });
    }



    render(){
        return(
            <div>
                <form onSubmit={this.addNewBook}>
                    <input type="text" onChange={this.handleChange('bookTitle')} 
                        value={this.state.newBook.bookTitle} label="Book" 
                        placeholder="Book Title"/>
                    <input type="text" onChange={this.handleChange('bookAuthor')} 
                        value={this.state.newBook.bookAuthor}
                        placeholder="Book Author" />
                    <input type="text" onChange={this.handleChange('ISBN')} 
                        value={this.state.newBook.ISBN}
                        placeholder="ISBN #" />
                    <select onChange={this.handleChange('bookCategory')} 
                        placeholder="Category">
                        <option value=""></option>
                        <option value="1">Childrens</option>
                        <option value="2">YA</option>
                        <option value="3">Fiction</option>
                        <option value="4">Self Help</option>
                        <option value="5">Biography</option>
                    </select>
                <input className='submitBtn' type='Submit' value='Add Book'/>
                </form>
            </div>
        )
    }
}

export default connect() (AddBook);