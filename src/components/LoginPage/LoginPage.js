import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';

import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form>
          <Typography component="h2" variant="h2" gutterBottom>
          Login
          </Typography>
          <div>
          {/* Username Form */}
          <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
            <Input
              id="input-with-icon-adornment"
              type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>} />
        </FormControl>
          </div>
          {/* Enter Password */}
          <div>
            <FormControl>
            <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
            <Input
              id="input-with-icon-adornment"
              type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>} />
          </FormControl>
          </div>

          <div>
            <pre></pre>
            <Fab
              variant="extended"
              size="medium"
              // color="green"
              aria-label="Add"
              className = "log-in"
              type = "submit"
              name = "submit"
              // value = "Log In"
              type="button" 
              onClick={this.login}>
            Log In
          </Fab>
            {/* <input
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
            /> */}
          </div>
        </form>
        <center>
             
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}>

            {/* <Typography gutterBottom
              variant = "button"
              className="nav-title">
              Register
          </Typography> */}

            <Typography component="h6" variant="h6" gutterBottom>
              Register
          </Typography>
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
