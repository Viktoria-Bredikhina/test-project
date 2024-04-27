import * as S from './button.style';

export default function Button({
    children,
    classes,
    onClick,
    isDisabled = false,
}) {
    return (
        <S.Btn
            $style={classes}
            type="button"
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </S.Btn>
    );
}