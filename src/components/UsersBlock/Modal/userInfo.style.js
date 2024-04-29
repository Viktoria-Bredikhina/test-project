import styled from 'styled-components';

export const ModalUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const InfoDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
`;
export const LoadingDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InfoDivItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ImgBlock = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;

    & img {
        width: 100%;
        height: auto;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
        cursor: pointer;
    }
    &:hover {
        transform: scale(1.2);
    }
`;
export const Title = styled.h3`
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    color: #21237b;
`;

export const Info = styled.p`
    font-size: 18px;
    color: #21237b;

    & span {
        font-weight: 600;
    }
`;
export const Link = styled.a`
    padding-top: 5px;
    font-size: 15px;
    color: #21237b;
    transition: transform 0.3s ease-in-out;
    text-decoration-line: underline;
    font-weight: 600;

    &:hover {
        transform: scale(1.07);
    }
    &:active {
        transform: scale(1.07);
    }
`;
