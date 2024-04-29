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
    font-size: ${(props) => (props.$active ? '12px' : '20px')};
    color: ${(props) => (props.$active ? '#b3adad' : ' #fff')};
    line-height: ${(props) => (props.$active ? '40px' : ' 50px')};
    max-width: 800px;
    text-align: center;

    @media (max-width: 540px) {
        font-size: ${(props) => (props.$active ? '12px' : '18px')};
    }
    @media (max-width: 385px) {
        font-size: ${(props) => (props.$active ? '12px' : '14px')};
        line-height: ${(props) => (props.$active ? '20px' : ' 45px')};
    }
`;
