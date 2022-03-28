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

export const readBook = (uid, bookId) => dispatch => {
  console.log('readBook', uid, bookId);
  return UserApi.readBook(uid, bookId).then(data =>
    dispatch({
      type: USER.READ_BOOK,
      data,
    }),
  );
};
