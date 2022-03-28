import {BOOK} from '../actions/types';

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
  currentChapter: 0, //阅读章节
  currentChapterPage: 0, //当前阅读章节的页面
  readInfo: {},
};

export default function bookReducer(state = initState, action) {
  switch (action.type) {
    case BOOK.LOAD_BOOK:
      console.log('reducer', state, action);
      return Object.assign({}, state, action.data);
    case BOOK.STORE_BOOK:
      return Object.assign({}, state, action.data);
    case BOOK.SAVE_BOOK:
      return Object.assign({}, state, action.data);
    case BOOK.REMOVE_BOOK:
      return Object.assign({}, state, {
        isStored: 0,
        isSaved: 0,
      });
    case BOOK.READ_BOOK:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
