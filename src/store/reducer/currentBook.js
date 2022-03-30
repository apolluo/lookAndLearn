import {BOOK, USER} from '../actions/types';

const initState = {
  book: {
    chapters: [],
    level: '',
    name: '',
    title: '',
    _id: '',
  },
  isStored: 0, //是否添加到书架
  isSaved: 0, //是否缓存
  price: 0, //价格
  isPurchased: false,
  currentChapter: 0, //阅读章节
  currentChapterPage: 0, //当前阅读章节的页面
  currentChapterTotalPage: 0, //当前章节总页数
  currentChapterProgress: 0, //当前章节进度
  readInfo: {},
  createdAt: '',
  duration: 0,
  updatedAt: '',
  _id: '',
};

const getReadProgress = data => {
  let currentChapterPage = 0;
  let currentChapterTotalPage = 0;
  let currentChapterProgress = 0;
  if (data.book) {
    currentChapterPage = data.currentChapterPage || 0;
    currentChapterTotalPage =
      data.book?.chapters?.[data.currentChapter]?.words.length;
    if (currentChapterPage && currentChapterTotalPage) {
      currentChapterProgress =
        (currentChapterPage * 100) / currentChapterTotalPage;
    }
  }
  return {
    currentChapterPage,
    currentChapterTotalPage,
    currentChapterProgress,
  };
};

export default function currentBookReducer(state = initState, action) {
  switch (action.type) {
    case USER.GET_CURRENT_BOOK:
      const currentChapterProgressInfo = getReadProgress(action.data);
      return Object.assign({}, state, action.data, currentChapterProgressInfo);
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
