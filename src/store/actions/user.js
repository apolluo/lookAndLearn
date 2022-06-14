import {USER} from '@store/actions/types';
import * as UserApi from '@api/user';
import * as BookApi from '@api/book';

export const getUser = uid => dispatch =>
  UserApi.getUser(uid).then(data =>
    dispatch({
      type: USER.GET_USER,
      data,
    }),
  );
export const getUserInfo = uid => dispatch =>
  UserApi.getUserInfo(uid)
    .then(data => {
      return dispatch({
        type: USER.GET_USER_INFO,
        data,
      });
    })
    .then(action => action.data);

export const readBook = (uid, body) => dispatch => {
  console.log('readBook', uid, body);
  return UserApi.readBook(uid, body).then(data => {
    console.log('readbook return', data);
    return dispatch({
      type: USER.READ_BOOK,
      data,
    });
  });
};
export const getCurrentBook = userInfo => dispatch => {
  let currentBook;
  if (userInfo && userInfo.currentBookId) {
    currentBook = userInfo.books.find(
      item => item._id === userInfo.currentBookId,
    );
  }
  return dispatch({
    type: USER.GET_CURRENT_BOOK,
    data: currentBook,
  });
};

export const readPage = (currentBook, pageIndex) => dispatch => {
  let currentChapter = currentBook.currentChapter || 0;
  let currentChapterPage = pageIndex;
  if (pageIndex > currentBook.book.chapters[currentChapter].words.length) {
    currentChapter += 1;
    currentChapterPage = 0;
  }
  if (
    currentChapter !== currentBook.currentChapter ||
    currentChapterPage !== currentBook.currentChapterPage
  ) {
      UserApi.
    dispatch({
      type: USER.UPDATE_CURRENT_BOOK,
      data: {
        currentChapter,
        currentChapterPage,
      },
    });
  }
  const wordId =
    currentBook.book.chapters[currentChapter].words[currentChapterPage];

  console.log('readPage', currentBook, pageIndex, currentChapter, wordId);

  return BookApi.getWordInfo(wordId).then(data => {
    dispatch({
      type: USER.READ_PAGE,
      data,
    });
  });
};
