import request from '@utils/request';

export const getUser = id => request.get(`/user/${id}`);
export const getUserInfo = id => request.get(`/user/${id}/info`);
