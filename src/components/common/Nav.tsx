import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useCookies } from 'react-cookie';

import useUserStore from '../../store/userStore';
import { QUERY_KEY } from '../../utils/query_key';

const Nav = () => {
  const { loginUserEmail, setLoginUserEmail } = useUserStore();
  const [cookies, setCookie, removeCookie] = useCookies();

  const queryClient = useQueryClient();

  const logoutBtn = () => {
    alert('로그아웃 되었습니다');
    removeCookie('userToken', { path: '/' });
    setLoginUserEmail('');
    queryClient.removeQueries({ queryKey: [QUERY_KEY.userInfo] });
  };

  return (
    <div className="w-full flex justify-end gap-5 p-5">
      {loginUserEmail ? (
        <>
          <button
            onClick={logoutBtn}
            className="border-solid border-2 border-indigo-600 p-2 rounded-md hover:bg-indigo-600 hover:text-white"
          >
            로그아웃
          </button>
          <Link
            to={'/mypage'}
            className="border-solid border-2 border-indigo-600 p-2 rounded-md hover:bg-indigo-600 hover:text-white"
          >
            마이페이지
          </Link>
        </>
      ) : (
        <>
          <Link
            to={'/login'}
            className="border-solid border-2 border-indigo-600 p-2 rounded-md hover:bg-indigo-600 hover:text-white"
          >
            로그인
          </Link>
          <Link
            to={'/join'}
            className="border-solid border-2 border-indigo-600 p-2 rounded-md hover:bg-indigo-600 hover:text-white"
          >
            회원가입
          </Link>
        </>
      )}
    </div>
  );
};

export default Nav;
