import { useNavigate } from 'react-router-dom';
import * as S from './notFound.style';
import Button from '../../components/UI/Button/Button';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <S.NotFound>
            <S.Heading>404 Not Found</S.Heading>
            <S.Message>Страница, которую вы ищете, не существует...</S.Message>
            <Button classes="notFound" onClick={() => navigate('/')}>
                Вернуться на главную
            </Button>
        </S.NotFound>
    );
}
