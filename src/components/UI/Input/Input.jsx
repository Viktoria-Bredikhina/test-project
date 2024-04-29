import * as S from './input.style';

export default function Input({
    type,
    name,
    id = '',
    value,
    placeholder,
    onChange,
}) {
    return (
        <S.Input
            type={type}
            name={name}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            autoComplete="off"
        />
    );
}
