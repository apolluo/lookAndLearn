import {combineReducers} from 'redux';
import bookStore from './bookStoreReducer';
import chapter from './chapterReducer';
import currentBook from './currentBook';
import content from './contentReducer';
import user from './user';

const indexReducer = combineReducers({
  bookStore,
  currentBook,
  chapter,
  content,
  user,
});

export default indexReducer;
