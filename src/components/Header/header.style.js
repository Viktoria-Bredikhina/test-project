import styled from 'styled-components';

export const Header = styled.header`
    position: sticky;
    top: 0px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    z-index: 999;
    background-color: #271a58;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 30px;
    padding-top: 10px;

    @media (max-width: 540px) {
        font-size: 20px;
    }
`;

export const SearchDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-radius: 60px;
    background-color: white;
    border: 1px solid #f1f1f1;
`;
