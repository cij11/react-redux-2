import React, {Component} from 'react';

export default class BookList extends Component{

  //Map over an array of books. For each element in the array, create a list item (li) that containts the book title.
  //Somehow, need to get the state from the reducer to here. This is done with react-redux library.
  //
  renderList(){
    return this.props.books.map((book)=>{
      return(
        <li key={book.title}className="list-group-item">{book.title}</li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}
