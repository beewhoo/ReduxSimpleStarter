import React from 'react';
import {connect} from 'react-redux'

class BookDetails extends React.Component{
  render(){

    if(!this.props.book) {
      return <div>select a book!</div>
    }


    return(
      <div>
        <h3> Details for:</h3>
        <div>title:{this.props.book.title}</div>
        <div>pages:{this.props.book.pages}</div>
      </div>
    )
  }
}


const mapStateToProps =(state) => {
  return{
    book:state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetails)
