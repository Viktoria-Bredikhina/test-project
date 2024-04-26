import { styled, css } from 'styled-components';

const buttons = {
    search: css`
        padding: 5px 25px;
        border: 1px solid #ffffff;
        border-radius: 60px;
    `,
    close: css`
        position: absolute;
        top: 0;
        right: 0;
        background-color: transparent;
        border: none;
        outline: none;
    `,
};

const btnMixin = (params) => {
    const styles = buttons[params];
    return styles;
};
export const Btn = styled.button`
    ${(props) => btnMixin(props.$style)};
`;
// background: none;