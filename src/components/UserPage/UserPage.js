import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
      margin: {
        margin: theme.spacing.unit,
      }
    });



// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    {/* <h1 >
      Welcome, 
    </h1> */}

    <Typography id="welcome" variant="h5" gutterBottom>
        Welcome, { props.user.username }!
      </Typography>
      {/* <Typography id="welcome" variant="h5" gutterBottom>
        Your ID is: {props.user.id}
      </Typography> */}
    {/* <p>Your ID is: {props.user.id}</p> */}
    <LogOutButton className="log-in" />
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
