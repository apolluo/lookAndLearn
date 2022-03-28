import {USER} from '../actions/types';

const initState = {
  createdAt: '',
  level: '3',
  name: '',
  psw: '',
  _id: '',
  books: [],
};
export default function user(state = initState, action) {
  switch (action.type) {
    case USER.GET_USER_INFO:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
