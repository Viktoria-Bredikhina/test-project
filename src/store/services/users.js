import { baseApi } from './baseApi';

export const usersQuery = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: ({ paramsLogin, paramsSort, perPage, page }) =>
                `search/users?q=${paramsLogin}&sort=repositories&order=${paramsSort}${perPage && page ? `&per_page=${perPage}&page=${page}` : ''}`,
        }),
        getUserInfo: build.query({
            query: (login) => `/users/${login}`,
        }),
    }),
});

export const { useLazyGetUserInfoQuery, useLazyGetUsersQuery } = usersQuery;
