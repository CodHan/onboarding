import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import useSetMutation from '../hooks/useSetMutation';

import { signUp } from '../api/auth';
import { QUERY_KEY } from '../utils/query_key';

const Join = () => {
  const { mutate: signUpMutate } = useSetMutation(signUp, [QUERY_KEY.userInfo]);

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    nickName: '',
  });

  const navigate = useNavigate();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const signUpBtn = () => {
    signUpMutate(inputValue, {
      onSuccess: () => {
        alert('회원가입이 완료 되었습니다. 로그인 해주세요!');
        navigate('/login');
      },
      onError: (error: any) => {
        alert(error);
        setInputValue({
          email: '',
          password: '',
          nickName: '',
        });
      },
    });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col bg-indigo-400 rounded-md items-center gap-10 p-8">
        <h1 className="text-3xl font-extrabold text-white">회원 가입</h1>
        <div className="flex gap-2 items-center">
          <span className="text-lg text-white">이메일 :</span>
          <input
            name="email"
            value={inputValue.email}
            className="border-solid border-2 text-lg"
            placeholder="이메일을 입력 해주세요."
            onChange={inputChangeHandler}
          />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-lg text-white">비밀번호 :</span>
          <input
            name="password"
            value={inputValue.password}
            className="border-solid border-2 text-lg mr-4"
            placeholder="비밀번호 입력 해주세요."
            type="password"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-lg text-white">닉네임 :</span>
          <input
            name="nickName"
            value={inputValue.nickName}
            className="border-solid border-2 text-lg"
            placeholder="닉네임을 입력 해주세요."
            onChange={inputChangeHandler}
          />
        </div>
        <button
          className="bg-white p-3 rounded-md font-semibold hover:bg-sky-300 hover:text-white"
          onClick={signUpBtn}
        >
          가입하기
        </button>
      </div>
    </div>
  );
};

export default Join;
