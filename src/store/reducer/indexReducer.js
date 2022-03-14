import {combineReducers} from 'redux';
import search from './searchReducer';
import bookStore from './bookStoreReducer';
import chapter from './chapterReducer';
import book from './bookReducer';
import content from './contentReducer';

const indexReducer = combineReducers({
  search,
  bookStore,
  book,
  chapter,
  content,
});

export default indexReducer;
