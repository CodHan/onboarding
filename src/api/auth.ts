import axios from 'axios';
import { User } from '../types/userInfo';

import { Cookies } from 'react-cookie';
import instance from '../axios/instance';

const baseURL = import.meta.env.VITE_BASE_URL;

const cookies = new Cookies();

//회원가입
export const signUp = async (userInfo: User) => {
  await instance.post(`${baseURL}/register`, userInfo);
};

//로그인
export const loginFn = async (userInfo: User) => {
  const { data } = await axios.post(`${baseURL}/login`, userInfo);
  cookies.set('userToken', data.accessToken, { path: '/' });
};

//로그인한 유저 정보
export const getUserInfo = async (loginUserEmail: string) => {
  try {
    const { data: users } = await axios.get(`${baseURL}/users`);
    const data = users.find((item: User) => {
      return item.email === loginUserEmail;
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
//닉네임 변경
export const updateNickName = async (updateUserInfo: User) => {
  try {
    await axios.patch(`${baseURL}/users/${updateUserInfo.id}`, updateUserInfo);
  } catch (error) {
    console.error(error);
  }
};
