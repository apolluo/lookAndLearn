import request from '@utils/request';

export const getUser = params => request.get('getUser', params);
