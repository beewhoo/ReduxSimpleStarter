import React from 'react';
import BookList from '../containers/BookList';
import BookDetails from '../containers/BookDetails';



class App extends React.Component {
  render() {
    return (
      <div>
      <BookList/>
      <BookDetails/>
      </div>
    );
  }
}

export default App
