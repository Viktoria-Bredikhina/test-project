import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as S from './pagination.style';
import Button from '../UI/Button/Button';
import ArrowForwardSvg from '../UI/Icons/Arrow/ArrowSvg';
import {
    setIsOpenDataAmount,
    setPage,
    setPerPage,
    setStartIndex,
    setEndIndex,
} from '../../store/slices/users';

export default function Pagination() {
    const dispatch = useDispatch();
    const {
        isOpenDataAmount,
        numberPages,
        page,
        totalAmountUserData,
        perPage,
        arrAmountData,
        startIndex,
        endIndex,
    } = useSelector((state) => state.users.pagination);

    useEffect(() => {
        dispatch(setStartIndex({ numberPages, page }));
        dispatch(setEndIndex({ numberPages, page }));
    }, [numberPages, page, dispatch]);

    const handlePageClick = (number) => {
        if (number !== page) {
            dispatch(setPage(number));
        }
    };

    const handleNextPage = () => {
        if (page < numberPages.length) {
            dispatch(setPage(page + 1));
        }
    };
    const handleGoToFirstPage = () => {
        if (page !== 1) {
            dispatch(setPage(1));
        }
    };

    return (
        <S.Pagination $active={totalAmountUserData <= 10}>
            <S.NumberPageDiv>
                {page !== 1 && numberPages.length > 5 && (
                    <>
                        <Button
                            classes="dataAmount"
                            onClick={handleGoToFirstPage}
                        >
                            В начало
                        </Button>
                        <S.Point> ... </S.Point>
                    </>
                )}

                {numberPages.slice(startIndex, endIndex).map((number) => (
                    <Button
                        key={number}
                        classes="pagination"
                        isActive={number === page}
                        onClick={() => handlePageClick(number)}
                    >
                        {number}
                    </Button>
                ))}
                {numberPages.length > 5 && page + 4 < numberPages.length && (
                    <S.Point> ... </S.Point>
                )}
                {numberPages.length > 5 && page + 4 < numberPages.length && (
                    <Button
                        classes="pagination"
                        onClick={() => handleNextPage()}
                    >
                        <ArrowForwardSvg />
                    </Button>
                )}
            </S.NumberPageDiv>

            <S.DataAmount
                onClick={(e) => {
                    e.stopPropagation();
                    dispatch(setIsOpenDataAmount(!isOpenDataAmount));
                }}
            >
                {totalAmountUserData > 10 && (
                    <Button classes="dataAmount" isActive={isOpenDataAmount}>
                        Показывать по: {perPage}
                    </Button>
                )}

                {isOpenDataAmount && (
                    <S.DataAmountUl>
                        {arrAmountData.map((item) => (
                            <S.Li
                                key={item}
                                $active={item === perPage}
                                onClick={() => dispatch(setPerPage(item))}
                            >
                                по: {item}
                            </S.Li>
                        ))}
                    </S.DataAmountUl>
                )}
            </S.DataAmount>
        </S.Pagination>
    );
}