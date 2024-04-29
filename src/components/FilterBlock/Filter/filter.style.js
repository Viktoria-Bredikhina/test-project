import styled from 'styled-components';

export const FilterDiv = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 50px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: center;
`;
export const FilterTitle = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: #fff;
`;
export const SortDiv = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 10px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    justify-content: center;
    align-items: center;

    @media (max-width: 540px) {
        -ms-flex-direction: column;
        flex-direction: column;
    }
`;

export const Div = styled.div`
    position: relative;
`;
