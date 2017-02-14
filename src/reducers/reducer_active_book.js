//State argument is not application state, only the state
//this reducer is responsible for.
//Reducer will be called whenever an action is sent by the app

//The same state we recieve is the state that we send.
//So if we don't update state in response to a message, return the same state that came in
export default function(state = null, action){ //If state is undefined, set to null (eg, for when application first started and no book has been selected)
  switch (action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
      }
  return state;
}
