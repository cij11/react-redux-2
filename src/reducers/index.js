import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'; //Assign the export of reducer_books as BooksReducer

const rootReducer = combineReducers({
  books: BooksReducer //Eg, a key : output of reducer
});

export default rootReducer;
