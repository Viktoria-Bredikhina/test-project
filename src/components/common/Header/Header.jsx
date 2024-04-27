import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './header.style';
import Button from '../UI/Button/Button';
import SearchSvg from '../UI/Icons/Search/SearchSvg';
import Input from '../UI/Input/Input';
import { setParamsLogin } from '../../store/slices/users';

export default function Header() {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

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
                <Button
                    classes="search"
                    onClick={() => dispatch(setParamsLogin(searchText))}
                >
                    <SearchSvg />
                </Button>
            </S.SearchDiv>
        </S.Header>
    );
}