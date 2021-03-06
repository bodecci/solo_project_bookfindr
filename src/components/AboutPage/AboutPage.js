import React from 'react';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <pre></pre>
      <Typography variant="body2" gutterBottom wrap >
        This about page is for anyone to read!
        BOOKFINDR is an app that helps you search your collection / library of books 
        when you see a new book and you’ re wondering
        if you already have the book or not in your collection.
      </Typography>
    </div>
  </div>
);

export default AboutPage;
