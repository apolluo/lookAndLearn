import {USER} from '../actions/types';

const initState = {
  _id: '',
  name: '',
  pronunciation: '',
  comment: '',
  components: [],
  association: '',
  sentences: [],
};
export default function (state = initState, action) {
  switch (action.type) {
    case USER.READ_PAGE:
      // const currentBook = action.data.currentBook.book;
      // const currentChapter = action.data.currentBook.currentChapter;
      // const pageIndex = action.data.pageIndex;
      // const wordId = currentBook.chapters[currentChapter].words[pageIndex];

      return Object.assign({}, state, action.data);

    default:
      return state;
  }
}
