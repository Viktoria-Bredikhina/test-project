import styled from 'styled-components';

export const Pagination = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 0px 10px;
    width: 100%;
    color: #ffffff;
    border-radius: 6px;
    background-color: #dbdbdb;
    border: 1px solid #ffffff;
    position: relative;
    @media (max-width: 703px) {
        gap: 0px;
        justify-content: ${(props) =>
            props.$active ? 'center' : 'flex-start'};
    }
`;

export const NumberPageDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`;

export const DataAmount = styled.div`
    position: absolute;
    right: 10px;
`;

export const DataAmountUl = styled.ul`
    position: absolute;
    bottom: 30px;
    right: 0;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
    width: 100%;
    border-radius: 12px;
    border: 1px solid #ffffff;
    background: #05002c;
    color: #ffffff;
    border-color: white;

    @media (max-width: 420px) {
        padding: 10px 10px;
    }
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

    @media (max-width: 500px) {
        & span {
            display: none;
        }
    }
`;
export const Point = styled.div`
    display: flex;
    align-items: center;
    color: black;
    padding: 0px 10px 0px 0px;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

export const DataAmountSpan = styled.span`
    @media (max-width: 500px) {
        display: none;
    }
`;
