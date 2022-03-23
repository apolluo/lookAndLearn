export const GET_ASSETS = () => dispatch =>
  dispatch({
    book: {
      primary: require('@assets/books/primary3/cover.jpg'),
    },
  });
export const loadBook = data => dispatch => {
  console.log('loadBook', data);
  return dispatch({});
};
