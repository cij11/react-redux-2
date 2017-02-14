//Store our action creators here
export function selectBook(book){ //Book is an object with a title
  console.log('A book has been selected', book.title);

  //action creator. Need to wire this to redux.
  //BookList has a 'connect' container.
  //Now we need to bind selectBook action to BookList container.
}
