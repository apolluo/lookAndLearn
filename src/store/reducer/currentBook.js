import * as types from '../actions/types';

const initState = {
  _id: '',
  name: '',
  title: '',
  chapters: [],
  cover: '',
  level: '',
  isStored: 0, //是否添加到书架
  isSaved: 0, //是否缓存
  price: 0, //价格
  isPurchased: false,
  read: 0, //阅读进度
};

export default function currentBook(state = initState, action) {
  switch (action.type) {
    case types.LOAD_BOOK:
      console.log('reducer', state, action);
      return Object.assign({}, state, action.data);
    case types.STORE_BOOK:
      return Object.assign({}, state, action.data);
    case types.SAVE_BOOK:
      return Object.assign({}, state, action.data);
    case types.REMOVE_BOOK:
      return Object.assign({}, state, {
        isStored: 0,
        isSaved: 0,
      });
    case types.READ_BOOK:
      return Object.assign({}, state, {
        read: action.read,
        page: action.page,
      });
    default:
      return state;
  }
}
