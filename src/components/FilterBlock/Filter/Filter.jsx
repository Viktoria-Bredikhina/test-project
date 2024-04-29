import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './filter.style';
import Button from '../../UI/Button/Button';
import FilterItem from '../FilterItem/FilterItem';
import {
    setIsOpenSort,
    setCurrentSortValue,
    setParamsSort,
} from '../../../store/slices/users';

export default function Filter() {
    const dispatch = useDispatch();
    const { isOpenSort, arrSortMethods, currentSortValue } = useSelector(
        (state) => state.users,
    );

    useEffect(() => {
        dispatch(setParamsSort(currentSortValue));
    }, [currentSortValue, dispatch]);

    return (
        <S.FilterDiv>
            <S.SortDiv>
                <S.FilterTitle>По количеству репозиториев:</S.FilterTitle>
                <S.Div onClick={(e) => e.stopPropagation()}>
                    <Button
                        classes="sort"
                        isActive={isOpenSort}
                        onClick={() => dispatch(setIsOpenSort(!isOpenSort))}
                    >
                        {currentSortValue}
                    </Button>
                    {isOpenSort && (
                        <FilterItem
                            data={arrSortMethods}
                            currentSortValue={currentSortValue}
                            onClick={(item) => {
                                dispatch(setIsOpenSort(false));
                                dispatch(setCurrentSortValue(item));
                            }}
                        />
                    )}
                </S.Div>
            </S.SortDiv>
        </S.FilterDiv>
    );
}
