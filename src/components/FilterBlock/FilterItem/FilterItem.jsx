import * as S from './filterItem.style';

export default function FilterItem({ data, currentSortValue, onClick }) {
    return (
        <S.Ul>
            {data?.map((item) => (
                <S.Li
                    $active={item === currentSortValue}
                    key={Math.random()}
                    onClick={() => {
                        onClick(item);
                    }}
                >
                    {item}
                </S.Li>
            ))}
        </S.Ul>
    );
}
