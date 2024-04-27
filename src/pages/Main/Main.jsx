/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './main.style';
import Filter from '../../components/FilterBlock/Filter/Filter';
import SearchNoResultSvg from '../../components/UI/Icons/Search/SearchNoResultSvg';
import { useLazyGetUsersQuery } from '../../store/services/users';
import { getTextResult } from '../../utils/helpers';

export default function MainPage() {
    const { paramsLogin, paramsSort, perPage, page } = useSelector(
        (state) => state.users,
    );
    const [getUsers, { isLoading, isError, data }] = useLazyGetUsersQuery();
    const [textError, setTextError] = useState('');

    const fetchDataUsers = async () => {
        try {
            await getUsers({
                paramsLogin,
                paramsSort,
                perPage,
                page,
            });
        } catch (error) {
            setTextError(error.message);
        }
    };

    useEffect(() => {
        if (paramsLogin && paramsSort && perPage && page) {
            fetchDataUsers();
        }
    }, [paramsLogin, paramsSort, perPage, page]);

    return (
        <S.App>
            {data?.items.length > 0 && paramsLogin && <Filter />}
            {(!data || data?.items?.length === 0 || !paramsLogin) && (
                <S.NoResultBlock>
                    <S.TextResult>
                        {getTextResult(
                            isError,
                            isLoading,
                            data,
                            paramsLogin,
                            textError,
                        )}
                        <SearchNoResultSvg />
                    </S.TextResult>
                </S.NoResultBlock>
            )}
        </S.App>
    );
}