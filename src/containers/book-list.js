import React, {Component} from 'react'; //Word means pull the whole thing. {} means assign an element from that library as its own name (Eg, React.Component assigned to Component)
import { connect }from 'react-redux'; //{} means just pull one element, and assign as its own name

class BookList extends Component{

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

//Takes the application state as an arguement (here, the list of books, and the active book)
//Whatever is returned will show up as props inside of booklist.
//
//While we hand the whole state in, we only assign the stuff that a container cares about to its props.
function mapStateToProps(state){
  //This return will be set to BookList.props
  return{
    books : state.books
  };
} //And again: The returned object is what will be avialable to BookList as props.

//Export the container: Eg, the connect of maptStateToPRops and Booklist
export default connect(mapStateToProps)(BookList);

//Whenever application state changes, then container will rerender.
