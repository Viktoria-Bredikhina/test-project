import { useState } from 'react';
import * as S from './userItem.style';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import UserInfo from '../Modal/UserInfo';

export default function UsersItem({ item }) {
    const [modalActive, setModalActive] = useState(false);

    return (
        <S.Li>
            <S.LoginBlock>
                <S.ImgBlock>
                    <img src={item.avatar_url} alt="avatarUser" />
                </S.ImgBlock>
                <S.Login>
                    Login: <span>{item.login}</span>
                </S.Login>
            </S.LoginBlock>
            <Button classes="user" onClick={() => setModalActive(true)}>
                Подробнее <S.UserSpan>о пользователе</S.UserSpan>
            </Button>
            <Modal isActive={modalActive} setActive={setModalActive}>
                <UserInfo item={item} modalActive={modalActive} />
            </Modal>
        </S.Li>
    );
}
