import request from '@utils/request';

export const getBookStore = () => request.get('/book');
export const getWordInfo = id => request.get(`/word/${id}/getInfo`);
