import * as S from './button.style';

export default function Button({
    children,
    classes,
    onClick,
    isActive = false,
    isDisabled = false,
}) {
    return (
        <S.Btn
            $style={classes}
            $active={isActive}
            type="button"
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </S.Btn>
    );
}
