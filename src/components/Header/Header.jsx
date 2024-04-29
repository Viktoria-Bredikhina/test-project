import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './header.style';
import Button from '../UI/Button/Button';
import SearchSvg from '../UI/Icons/Search/SearchSvg';
import ClearSvg from '../UI/Icons/Clear/ClearSvg';
import Input from '../UI/Input/Input';
import {
    setParamsLogin,
    setPage,
    setParamsSort,
    setCurrentSortValue,
    setPerPage,
} from '../../store/slices/users';
import { handleClearCacheUsers } from '../../utils/helpers';

export default function Header() {
    const dispatch = useDispatch();
    const paramsLogin = useSelector((state) => state.users.paramsLogin);
    const [searchText, setSearchText] = useState('');

    const clearSearchText = () => {
        setSearchText('');
        if (paramsLogin) {
            handleClearCacheUsers(dispatch);
        }
    };
    const clickBtnSearch = () => {
        dispatch(setParamsLogin(searchText));
        dispatch(setPage(1));
        dispatch(setPerPage(10));
        dispatch(setParamsSort('По возрастанию'));
        dispatch(setCurrentSortValue('По возрастанию'));
    };

    return (
        <S.Header>
            <S.Title>Поиск пользователей на GitHub</S.Title>
            <S.SearchDiv>
                <Input
                    type="search"
                    placeholder="Введите логин пользователя"
                    name="search"
                    value={searchText}
                    onChange={(e) => {
                        if (e.target.value.length === 0) {
                            dispatch(setParamsLogin(''));
                        }
                        setSearchText(e.target.value);
                    }}
                />
                {searchText && (
                    <Button
                        onClick={() => {
                            clearSearchText();
                        }}
                    >
                        <ClearSvg />
                    </Button>
                )}

                <Button
                    classes="search"
                    onClick={() => {
                        clickBtnSearch();
                    }}
                >
                    <SearchSvg />
                </Button>
            </S.SearchDiv>
        </S.Header>
    );
}
