import {USER} from '@store/actions/types';
import * as UserApi from '@api/user';

export const getUser = uid => dispatch =>
  UserApi.getUser(uid).then(data =>
    dispatch({
      type: USER.GET_USER,
      data,
    }),
  );
export const getUserInfo = uid => dispatch =>
  UserApi.getUserInfo(uid)
    .then(data => {
      return dispatch({
        type: USER.GET_USER_INFO,
        data,
      });
    })
    .then(action => action.data);

export const readBook = (uid, body) => dispatch => {
  console.log('readBook', uid, body);
  return UserApi.readBook(uid, body).then(data => {
    console.log('readbook return', data);
    return dispatch({
      type: USER.READ_BOOK,
      data,
    });
  });
};
export const getCurrentBook = userInfo => dispatch => {
  let currentBook;
  if (userInfo && userInfo.currentBookId) {
    currentBook = userInfo.books.find(
      item => item._id === userInfo.currentBookId,
    );
  }
  return dispatch({
    type: USER.GET_CURRENT_BOOK,
    data: currentBook,
  });
};
