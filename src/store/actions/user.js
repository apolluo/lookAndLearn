import {GET_USER, GET_USER_INFO, LOAD_BOOK} from '@store/actions/types';
import * as UserApi from '@api/user';

export const getUser = uid => dispatch =>
  UserApi.getUser(uid).then(data =>
    dispatch({
      type: GET_USER,
      data,
    }),
  );
export const getUserInfo = uid => dispatch =>
  UserApi.getUserInfo(uid).then(data => {
    dispatch({
      type: LOAD_BOOK,
      data,
    });
    return dispatch({
      type: GET_USER_INFO,
      data,
    });
  });
