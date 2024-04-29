import { FadeLoader } from 'react-spinners';
import { baseApi } from '../store/services/baseApi';
import {
    setPage,
    setParamsSort,
    setParamsLogin,
    setCurrentSortValue,
    setPerPage,
    setTotalAmountUserData,
} from '../store/slices/users';

const getTextResult = (isError, isLoading, data, paramsLogin, textError) => {
    if (isError) {
        return 'Не удалось загрузить пользователей... Пожалуйста, попробуйте повторите попытку через некоторое время.';
    }
    if (textError) {
        return textError;
    }

    if (!isError && !isLoading) {
        if (!paramsLogin) {
            return 'Пожалуйста, введите в поле ввода данные пользователя, чтобы получить список пользователей.';
        }

        if (paramsLogin && data?.items.length === 0) {
            return `Пользователи по запросу «${paramsLogin}» не найдены.`;
        }
        if (paramsLogin) {
            if (data?.total_count === 1) {
                return `Найден ${data.total_count} пользователь.`;
            }
            if (data?.total_count > 1 && data?.total_count <= 1000) {
                return `Найденo ${data.total_count} пользователей.`;
            }
            if (data?.total_count > 1000) {
                return `Найденo ${data.total_count} пользователей. Отображаются первые 1000 записей.`;
            }
        }
    }

    if (!isError && isLoading) {
        return <FadeLoader color="#36d7b7" height={15} width={5} />;
    }
};

const getTextResultUserInfo = (data, isLoading, textError) => {
    if (!data && !isLoading) {
        return 'Не удалось загрузить информацию о пользователе...';
    }
    if (textError) {
        return textError;
    }

    return <FadeLoader color="#36d7b7" height={15} width={5} />;
};

const handleClearCacheUsers = (dispatch) => {
    dispatch(baseApi.util.resetApiState());
    dispatch(setPage(1));
    dispatch(setParamsSort('По возрастанию'));
    dispatch(setCurrentSortValue('По возрастанию'));
    dispatch(setPerPage(10));
    dispatch(setTotalAmountUserData(0));
    dispatch(setParamsLogin(''));
};

export { getTextResult, handleClearCacheUsers, getTextResultUserInfo };
