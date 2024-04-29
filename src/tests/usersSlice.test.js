import { screen } from '@testing-library/react';
import usersReducer, {
    setIsOpenSort,
    setNumberPages,
} from '../store/slices/users';

export const { expect, test, describe, it } = window;

const testReducer = (initialState, action) =>
    usersReducer(initialState, action);

describe('users reducer', () => {
    it('should return the initialState', () => {
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
        expect(testReducer(undefined, {})).toStrictEqual(initialState);
    });
    it('should set isOpenSort', () => {
        const initialState = {
            isOpenSort: false,
        };
        const action = setIsOpenSort(true);
        const newState = testReducer(initialState, action);
        expect(newState.isOpenSort).toEqual(true);
    });

    it('should update numberPages correctly when payload is less than or equal to 1000', () => {
        const initialState = {
            pagination: {
                perPage: 10,
                numberPages: [1],
            },
        };
        const action = setNumberPages(100);
        const newState = usersReducer(initialState, action);

        expect(newState.pagination.numberPages).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ]);
    });

    it('should correctly handle cases where the data size exceeds 1000', () => {
        const initialState = {
            pagination: {
                perPage: 100,
                numberPages: [1],
            },
        };
        const action = setNumberPages(1600);
        const newState = usersReducer(initialState, action);

        expect(newState.pagination.numberPages).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ]);
    });

    screen.debug();
});
