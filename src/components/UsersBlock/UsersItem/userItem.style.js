import styled from 'styled-components';

export const Li = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    padding: 10px 25px;
    max-width: 800px;
    border-radius: 12px;
    color: #ffffff;
    background-color: transparent;
    border: 1px solid #ffffff;
    @media (max-width: 703px) {
        width: 100%;
        gap: 0px;
    }
`;