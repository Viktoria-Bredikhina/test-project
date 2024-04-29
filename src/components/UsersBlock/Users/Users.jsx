import * as S from './users.style';
import UsersItem from '../UsersItem/UsersItem';
import Pagination from '../../Pagination/Pagination';

export default function UsersList({ data }) {
    return (
        <S.BlockUsers>
            <S.Ul>
                {data?.items.map((item) => (
                    <UsersItem key={Math.random()} item={item} />
                ))}
                <Pagination />
            </S.Ul>
        </S.BlockUsers>
    );
}
