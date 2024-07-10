import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="w-full flex justify-end gap-5 p-5">
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
      <Link
        to={'/mypage'}
        className="border-solid border-2 border-indigo-600 p-2 rounded-md hover:bg-indigo-600 hover:text-white"
      >
        마이페이지
      </Link>
    </div>
  );
};

export default Nav;
