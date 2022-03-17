import {GET_USER} from '@store/actions/types';
import * as UserApi from '@api/user';

export const getUser = uid => dispatch =>
  UserApi.getUser(uid).then(data =>
    dispatch({
      type: GET_USER,
      data,
    }),
  );
