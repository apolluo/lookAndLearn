import {BOOK} from '../actions/types';

const initState = {};
export default function bookStore(state = initState, action) {
  switch (action.type) {
    case BOOK.GET_BOOK_STORE:
      console.log('GET_BOOK_STORE', action);
      if (action.data) {
        return action.data;
      }
      return state;
    case BOOK.UPDATE_BOOK_STORE:
      if (state.data && action.updateBook) {
        let books = [];
        for (let book of state.data) {
          if (book.bookId === action.updateBook.bookId) {
            books.push(action.updateBook);
          } else {
            books.push(book);
          }
        }
        return {data: books};
      }
      return state;
    default:
      return state;
  }
}
