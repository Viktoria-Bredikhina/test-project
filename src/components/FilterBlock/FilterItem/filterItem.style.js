import styled from 'styled-components';

export const Ul = styled.ul`
    position: absolute;
    top: 105%;
    left: 0;
    width: 100%;
    border: 1px solid #dddddd;
    padding: 8px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 12px;
    background: #05002c;
    color: #ffffff;
    border-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Li = styled.li`
    color: ${(props) => (props.$active ? '#db61ffab' : 'white')};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        color: #db61ffab;
        text-decoration-line: underline;
    }
    &:active {
        color: #db61ffab;
        text-decoration-line: underline;
    }
`;
