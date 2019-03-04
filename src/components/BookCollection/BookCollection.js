import React from 'react';
import BookDisplayTable from '../BookDisplay/BookDisplayTable';
// import AddBook from '../AddBook/AddBook';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const BookCollection = props => (
    <div>
        <br></br>
        <Typography align="center" id="welcome" variant="h5" gutterBottom>
                Books in Your Collection
                </Typography>
        {/* <pre>{this.props.user.id}</pre> */}
        {/* <button className="bttn">SEARCH YOUR Collection</button> */}
        <BookDisplayTable history={props.history} />
        {/* <AddBook /> */}
    </div>
);

export default connect() (BookCollection);