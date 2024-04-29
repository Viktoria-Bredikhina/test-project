/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './main.style';
import Filter from '../../components/FilterBlock/Filter/Filter';
import SearchNoResultSvg from '../../components/UI/Icons/Search/SearchNoResultSvg';
import UsersList from '../../components/UsersBlock/Users/Users';
import { useLazyGetUsersQuery } from '../../store/services/users';
import { getTextResult, handleClearCacheUsers } from '../../utils/helpers';
import { fetchDataUsers } from '../../utils/fetchDataUser';

export default function MainPage() {
    const dispatch = useDispatch();
    const { paramsLogin, paramsSort, pagination } = useSelector(
        (state) => state.users,
    );
    const [getUsers, { isLoading, isError, data }] = useLazyGetUsersQuery();
    const [textError, setTextError] = useState('');

    useEffect(() => {
        if (
            paramsLogin &&
            paramsSort &&
            pagination.perPage &&
            pagination.page
        ) {
            fetchDataUsers(
                paramsLogin,
                paramsSort,
                pagination,
                getUsers,
                setTextError,
                dispatch,
            );
        }
    }, [paramsLogin, paramsSort, pagination.perPage, pagination.page]);

    useEffect(() => {
        if (!paramsLogin && (isError || data)) {
            handleClearCacheUsers(dispatch);
        }
    }, [paramsLogin, isError]);

    return (
        <S.App>
            {(!data ||
                data?.items?.length === 0 ||
                data?.items?.length > 0) && (
                <S.NoResultBlock>
                    <S.TextResult $active={data?.items?.length > 0 && !isError}>
                        {getTextResult(
                            isError,
                            isLoading,
                            data,
                            paramsLogin,
                            textError,
                        )}
                        {!isLoading &&
                            (!data?.items?.length > 0 || isError) && (
                                <SearchNoResultSvg />
                            )}
                    </S.TextResult>
                </S.NoResultBlock>
            )}

            {data?.items.length > 1 && paramsLogin && !isError && <Filter />}

            {paramsLogin && data?.items.length > 0 && !isError && (
                <UsersList data={data} isError={isError} />
            )}
        </S.App>
    );
}
