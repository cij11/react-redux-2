import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'; //Assign the export of reducer_books as BooksReducer
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer, //Eg, a key : output of reducer
  activeBook: ActiveBook  //Any key here ends up as a key in the global state.
});

export default rootReducer;
