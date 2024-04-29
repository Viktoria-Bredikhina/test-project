import styled from 'styled-components';

export const BlockUsers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 703px) {
        align-items: stretch;
    }
`;
export const Ul = styled.ul`
    padding: 20px 50px;
    border-radius: 12px;
    width: 100%;

    @media (max-width: 800px) {
        padding: 20px 0px;
    }
`;
