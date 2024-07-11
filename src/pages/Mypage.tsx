import { useEffect, useState } from 'react';

import useGetUserInfo from '../hooks/useGetUserInfo';
import useSetMutation from '../hooks/useSetMutation';

import { updateNickName } from '../api/auth';
import { QUERY_KEY } from '../utils/query_key';

const Mypage = () => {
  const { data } = useGetUserInfo();
  const [inputToggle, setInputToggle] = useState(false);
  const [inputValue, setInputValue] = useState({
    nickName: '',
    id: '',
  });

  useEffect(() => {
    if (data) {
      setInputValue({
        nickName: data.nickName,
        id: data.id,
      });
    }
  }, [data]);

  const { mutate: updateMutate } = useSetMutation(updateNickName, [
    QUERY_KEY.userInfo,
  ]);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const updateBtn = () => {
    alert('닉네임이 변경 되었습니다 !');
    setInputToggle(!inputToggle);
    updateMutate(inputValue);
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-8">
        {inputToggle ? (
          <>
            <input
              className="font-extrabold text-2xl border-solid border-2"
              value={inputValue.nickName}
              name="nickName"
              onChange={inputChangeHandler}
            />
            <button
              onClick={updateBtn}
              className="bg-indigo-400 p-3 rounded-md font-semibold hover:text-white"
            >
              확인
            </button>
          </>
        ) : (
          <div className="flex flex-col gap-8 w-[305px]">
            <h1 className="font-extrabold text-2xl">
              {data ? data.nickName : ''}
            </h1>
            <button
              onClick={() => setInputToggle(!inputToggle)}
              className="bg-indigo-400 p-3 mt-[3px] rounded-md font-semibold hover:text-white"
            >
              닉네임 변경
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mypage;
