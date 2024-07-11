import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import useSetMutation from '../hooks/useSetMutation';

import { loginFn } from '../api/auth';

const Login = () => {
  const { mutate: loginMutate } = useSetMutation(loginFn, ['user']);

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const loginBtn = () => {
    loginMutate(inputValue, {
      onSuccess: () => {
        alert('로그인 성공');
        navigate('/');
      },
      onError: (error: any) => {
        alert(error.response.data);
      },
    });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col bg-indigo-400 rounded-md items-center gap-10 p-8">
        <h1 className="text-3xl font-extrabold text-white">로그인</h1>
        <div className="flex gap-2 items-center">
          <span className="text-lg text-white">이메일 :</span>
          <input
            name="email"
            className="border-solid border-2 text-lg"
            placeholder="이메일을 입력 해주세요."
            onChange={inputChangeHandler}
          />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-lg text-white">비밀번호 :</span>
          <input
            name="password"
            className="border-solid border-2 text-lg mr-4"
            type="password"
            placeholder="비밀번호 입력 해주세요."
            onChange={inputChangeHandler}
          />
        </div>
        <button
          className="bg-white p-3 rounded-md font-semibold hover:bg-sky-300 hover:text-white"
          onClick={loginBtn}
        >
          로그인하기
        </button>
      </div>
    </div>
  );
};

export default Login;
