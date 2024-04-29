import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './layout.style';
import Header from '../../components/Header/Header';
import { setIsOpenSort, setIsOpenDataAmount } from '../../store/slices/users';

export default function Layout() {
    const dispatch = useDispatch();
    const { isOpenSort, pagination } = useSelector((state) => state.users);

    return (
        <S.Wrapper
            onClick={() => {
                if (isOpenSort) {
                    dispatch(setIsOpenSort(false));
                }
                if (pagination.isOpenDataAmount) {
                    dispatch(setIsOpenDataAmount(false));
                }
            }}
        >
            <S.Container>
                <Header />
                <Outlet />
            </S.Container>
        </S.Wrapper>
    );
}
