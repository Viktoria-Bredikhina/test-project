import * as S from './modal.style';
import CloseSvg from '../Icons/Close/CloseSvg';
import Button from '../Button/Button';

export default function Modal({ isActive, setActive, children }) {
    return (
        <S.Modal
            $active={isActive}
            onClick={() => {
                setActive(false);
            }}
        >
            <S.Content $active={isActive} onClick={(e) => e.stopPropagation()}>
                <Button
                    classes="close"
                    onClick={() => {
                        setActive(false);
                    }}
                >
                    <CloseSvg />
                </Button>

                {children}
            </S.Content>
        </S.Modal>
    );
}
