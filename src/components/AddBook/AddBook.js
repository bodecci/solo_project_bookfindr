import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            
            newBook: {
                ...this.state.newBook,
                [propertyName]: event.target.value
            }
            
        });
    }



    render(){
        return(
            <div>
                <form onSubmit={this.addNewBook}>
                    <input type="text" onChange={this.handleChange('title')} 
                        value={this.state.newBook.title} label="title" 
                        placeholder="Book Title"/>
                    <input type="text" onChange={this.handleChange('author')} 
                        value={this.state.newBook.author}
                        placeholder="Book Author" />
                    <input type="text" onChange={this.handleChange('ISBN')} 
                        value={this.state.newBook.ISBN}
                        placeholder="ISBN #" />
                    <select onChange={this.handleChange('category')}
                        defaultValue={this.state.newBook.category} 
                        placeholder="category">
                        <option value=""></option>
                        <option value="Childrens">Childrens</option>
                        <option value="YA">YA</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Self Help">Self Help</option>
                        <option value="Biography">Biography</option>
                    </select>
                <input className='submitBtn' type='Submit' value='Add Book'/>
                </form>
            </div>
        )
    }
}

export default connect() (AddBook);