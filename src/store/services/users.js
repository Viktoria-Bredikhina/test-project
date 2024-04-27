import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersQuery = createApi({
    reducerPath: 'usersQuery',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com',
    }),
    tagTypes: ['Users'],

    endpoints: (build) => ({
        getUsers: build.query({
            query: ({ paramsLogin, paramsSort, perPage, page }) =>
                `search/users?q=${paramsLogin}&sort=repositories&order=${paramsSort}&per_page=${perPage}&page=${page}`,
        }),
    }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = usersQuery;