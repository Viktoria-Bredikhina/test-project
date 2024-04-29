import styled from 'styled-components';

export const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    visibility: ${(props) => (props.$active ? 'visible' : 'hidden')};
    pointer-events: ${(props) => (props.$active ? 'all' : 'none')};
    opacity: ${(props) => (props.$active ? '1' : '0')};
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    z-index: 999;
`;
export const Content = styled.div`
    padding: 36px 54px;
    border-radius: 12px;
    background-color: #d9d9d9;
    transform: ${(props) => (props.$active ? 'scale(1)' : ' scale(0.5)')};
    transition: 0.4s;
`;
