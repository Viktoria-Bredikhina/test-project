import { configureStore } from '@reduxjs/toolkit';
import { usersQuery } from './services/users';
import usersReducer from './slices/users';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [usersQuery.reducerPath]: usersQuery.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersQuery.middleware),
});
