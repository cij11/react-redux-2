import React, {Component} from 'react'; //Word means pull the whole thing. {} means assign an element from that library as its own name (Eg, React.Component assigned to Component)
import { connect }from 'react-redux'; //{} means just pull one element, and assign as its own name
import {selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //This makes actions flow through reducers.

class BookList extends Component{
  //Map over an array of books. For each element in the array, create a list item (li) that containts the book title.
  //Somehow, need to get the state from the reducer to here. This is done with react-redux library.
  renderList(){
    return this.props.books.map((book)=>{
      return(
        <li
          key={book.title}
          onClick={()=>this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
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

//Anything returned from this function will end up as props on the BookList container (eventually).
function mapDispatchToProps(dispatch){
  //Whenever selectBook is called, the result should be passed to ALL our reducers. That is what bindActionCreators/dispatch
    return bindActionCreators({ selectBook: selectBook}, dispatch)  //Bind key select book to action selectBook

}

//Export the container: Eg, the connect of maptStateToPRops and Booklist
//Promote Booklist from component to container. It needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList); //Connect mapDispatchToProps as well.

//Whenever application state changes, then container will rerender.
