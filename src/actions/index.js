//Store our action creators here
export function selectBook(book){ //Book is an object with a title

  //Select book is an ActionCreator, it needs to return an action (an object with a type and a property)

  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}
