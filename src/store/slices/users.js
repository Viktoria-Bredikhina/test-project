import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenSort: false,
    arrSortMethods: ['По возрастанию', 'По убыванию'],
    currentSortValue: 'По возрастанию',
    paramsLogin: '',
    paramsSort: 'asc',
    pagination: {
        isOpenDataAmount: false,
        totalAmountUserData: 0,
        numberPages: [1],
        perPage: 10,
        page: 1,
        arrAmountData: [],
        startIndex: 0,
        endIndex: 5,
    },
};

export const usersSlice = createSlice({
    name: 'usersReducer',
    initialState,

    reducers: {
        setIsOpenSort: (state, action) => {
            state.isOpenSort = action.payload;
        },
        setIsOpenDataAmount: (state, action) => {
            state.pagination.isOpenDataAmount = action.payload;
        },
        setCurrentSortValue: (state, action) => {
            state.currentSortValue = action.payload;
        },
        setParamsLogin: (state, action) => {
            state.paramsLogin = action.payload;
        },
        setParamsSort: (state, action) => {
            if (action.payload === 'По возрастанию') {
                state.paramsSort = 'asc';
            } else {
                state.paramsSort = 'desc';
            }
        },
        setTotalAmountUserData: (state, action) => {
            state.pagination.totalAmountUserData = action.payload;
        },
        setPerPage: (state, action) => {
            state.pagination.perPage = action.payload;
        },
        setPage: (state, action) => {
            state.pagination.page = action.payload;
        },

        setNumberPages: (state, action) => {
            if (state.pagination.perPage && action.payload) {
                const totalPages =
                    action.payload > 1000
                        ? Math.ceil(1000 / state.pagination.perPage)
                        : Math.ceil(action.payload / state.pagination.perPage);

                state.pagination.numberPages = [];

                for (let i = 1; i <= totalPages; i += 1) {
                    state.pagination.numberPages.push(i);
                }
            } else {
                state.pagination.numberPages = [1];
            }
        },

        setArrAmountData: (state, action) => {
            if (action.payload <= 25) {
                state.pagination.arrAmountData = [25, 10, 5];
            } else if (action.payload <= 50) {
                state.pagination.arrAmountData = [50, 25, 10, 5];
            } else {
                state.pagination.arrAmountData = [100, 50, 25, 10];
            }
        },
        setStartIndex: (state, action) => {
            const { numberPages, page } = action.payload;

            state.pagination.startIndex =
                numberPages.length <= 5
                    ? 0
                    : Math.max(
                          page + 4 > numberPages.length
                              ? numberPages.length - 5
                              : page - 1,
                          0,
                      );
        },
        setEndIndex: (state, action) => {
            const { numberPages, page } = action.payload;

            state.pagination.endIndex = Math.min(page + 4, numberPages.length);
        },
    },
});

export const {
    setIsOpenSort,
    setIsOpenDataAmount,
    setCurrentSortValue,
    setParamsLogin,
    setParamsSort,
    setTotalAmountUserData,
    setPerPage,
    setPage,
    setNumberPages,
    setArrAmountData,
    setStartIndex,
    setEndIndex,
} = usersSlice.actions;

export default usersSlice.reducer;
