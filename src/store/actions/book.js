import {BOOK} from './types';
import * as BookApi from '@api/book';

export const GET_ASSETS = () => dispatch =>
  dispatch({
    book: {
      primary: require('@assets/books/primary3/cover.jpg'),
    },
  });

export const loadBook = data => dispatch => {
  console.log('loadBook', data);
  return dispatch({});
};

export const getBookStore = () => dispatch => {
  return BookApi.getBookStore().then(data => {
    console.log('getBookStore', data);
    return dispatch({
      type: BOOK.GET_BOOK_STORE,
      data,
    });
  });
};
