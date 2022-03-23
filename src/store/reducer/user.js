import * as types from '../actions/types';

const initState = {
  bookStore: [],
  currentBook: {
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
  },
};
export default function user(state = initState, action) {
  switch (action.type) {
    case types.GET_USER_INFO:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
