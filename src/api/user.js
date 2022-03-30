import request from '@utils/request';

export const getUser = id => request.get(`/user/${id}`);
export const getUserInfo = id => request.get(`/user/${id}/info`);

export const readBook = (id, params) =>
  request.post(`/user/${id}/readBook`, params);
