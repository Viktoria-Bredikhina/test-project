/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import * as S from './userInfo.style';
import { useLazyGetUserInfoQuery } from '../../../store/services/users';
import { getTextResultUserInfo } from '../../../utils/helpers';
import { fetchDataUserInfo } from '../../../utils/fetchDataUser';

export default function UserInfo({ item, modalActive }) {
    const [getUserInfo, { data, isLoading }] = useLazyGetUserInfoQuery();
    const [textError, setTextError] = useState('');

    useEffect(() => {
        if (item?.login && modalActive) {
            fetchDataUserInfo(getUserInfo, setTextError, item);
        }
    }, [modalActive, item]);

    return (
        <S.ModalUserInfo>
            <S.Title>Информация о пользователе: </S.Title>

            {!data ? (
                <S.LoadingDiv>
                    {getTextResultUserInfo(isLoading, data, textError)}
                </S.LoadingDiv>
            ) : (
                <S.InfoDiv>
                    <a href={data?.avatar_url} target="_blank" rel="noreferrer">
                        <S.ImgBlock>
                            <img
                                src={
                                    data?.avatar_url
                                        ? data.avatar_url
                                        : 'no-photo.jpg'
                                }
                                alt="avatarUser"
                            />
                        </S.ImgBlock>
                    </a>
                    <S.InfoDivItem>
                        <S.Info>
                            Login: <span>{data?.login}</span>
                        </S.Info>
                        <S.Info>
                            Type: <span>{data?.type}</span>{' '}
                        </S.Info>
                        {data?.name && (
                            <S.Info>
                                Name: <span>{data?.name}</span>{' '}
                            </S.Info>
                        )}
                        {data?.location && (
                            <S.Info>
                                Location: <span>{data?.location}</span>{' '}
                            </S.Info>
                        )}
                        {data?.email && (
                            <S.Info>
                                E-mail: <span>{data?.email}</span>{' '}
                            </S.Info>
                        )}
                        <S.Info>
                            followers: <span>{data?.followers}</span>
                        </S.Info>
                        <S.Info>
                            following: <span>{data?.following}</span>
                        </S.Info>

                        <S.Info>
                            repositories : <span>{data?.public_repos}</span>
                        </S.Info>
                        <S.Link
                            href={data?.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Перейти на профиль пользователя на GitHub
                        </S.Link>
                    </S.InfoDivItem>
                </S.InfoDiv>
            )}
        </S.ModalUserInfo>
    );
}
