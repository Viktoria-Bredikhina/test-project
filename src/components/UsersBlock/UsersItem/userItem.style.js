import styled from 'styled-components';

export const Li = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    padding: 10px 25px;
    width: 100%;
    border-radius: 12px;
    color: #ffffff;
    background-color: transparent;
    border: 1px solid #ffffff;

    @media (max-width: 703px) {
        gap: 0px;
    }
`;

export const LoginBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
`;

export const ImgBlock = styled.div`
    width: 50px;
    height: 50px;
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
    }
`;

export const Login = styled.p`
    & span {
        font-size: 16px;
        text-decoration-line: underline;
    }
`;

export const UserSpan = styled.span`
    @media (max-width: 800px) {
        display: none;
    }
`;
