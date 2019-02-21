import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './LandingPage.css';

class LandingPage extends Component {
    
    handleSearchClick = () => {
        console.log('Search clicked');
        
    } 

    handleViewClick = () => {
        console.log('View Clicked');
        this.props.history.push('/addbooks');
        
    }

    render() {
        return (
            <div>
                
                <div className="divSize">
                <Typography id="welcome" variant="h5" gutterBottom>
                Welcome, {this.props.user.username}!
                </Typography>

                <button className ="bttnSize" onClick={this.handleViewClick}>
                    VIEW<p>collection</p> 
                    </button>
                    <br></br>

                < button className = "bttnSize" onClick={this.handleSearchClick} >
                   SEARCH<p>Library</p>
                </button>

                <div className="bttnSize">
                <br></br>
                 <Fab color="primary" aria-label="Add" 
                    align="center">
                    <AddIcon />
                </Fab><p>Add Books</p>
                </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(LandingPage);