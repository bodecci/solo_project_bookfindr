import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './LandingPage.css';

class LandingPage extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                

                <Typography id="welcome" variant="h5" gutterBottom>
                Welcome, {this.props.user.username}!
                </Typography>

                <button className ="bttnSize" >
                    VIEW 
                    </button>
                    <br></br>

                < button className = "bttnSize" >
                    Search
                </button>

                <div className="bttnSize">
                <br></br>
                <Fab color="primary" aria-label="Add" 
                    align="center">
                    <AddIcon />
                </Fab>
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(LandingPage);