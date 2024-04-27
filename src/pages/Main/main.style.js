import styled from 'styled-components';

export const App = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding-top: 30px;
`;

export const NoResultBlock = styled.div`
    display: flex;
    justify-content: center;
`;
export const TextResult = styled.p`
    font-size: 20px;
    color: #fff;
    line-height: 50px;
    max-width: 800px;
    text-align: center;

    @media (max-width: 540px) {
        font-size: 18px;
    }
    @media (max-width: 370px) {
        font-size: 14px;
        line-height: 45px;
    }
`;