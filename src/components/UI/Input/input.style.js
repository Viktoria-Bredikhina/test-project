import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    border: none;
    padding: 0px 30px;
    border-radius: 60px;
    outline: none;
    color: #271a58;
    font-size: 20px;
    background: none;

    &::-webkit-input-placeholder {
        font-size: 18px;
        color: #d0cece;
    }

    &:-ms-input-placeholder {
        font-size: 18px;
        color: #d0cece;
    }

    &::-ms-input-placeholder {
        font-size: 18px;
        color: #d0cece;
    }

    &::placeholder {
        font-size: 18px;
        color: #d0cece;
    }

    @media (max-width: 540px) {
        padding: 0px 20px;
        font-size: 18px;

        &::-webkit-input-placeholder {
            font-size: 14px;
            color: #d0cece;
        }

        &:-ms-input-placeholder {
            font-size: 14px;
            color: #d0cece;
        }

        &::-ms-input-placeholder {
            font-size: 14px;
            color: #d0cece;
        }

        &::placeholder {
            font-size: 14px;
            color: #d0cece;
        }
    }
`;
