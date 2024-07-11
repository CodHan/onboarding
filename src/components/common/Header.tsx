import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { decodingInfo } from '../../api/jwt';
import useUserStore from '../../store/userStore';

const Header = () => {
  const [cookies] = useCookies();
  const { setLoginUserEmail } = useUserStore();

  useEffect(() => {
    if (cookies.userToken) {
      const data = decodingInfo(cookies.userToken);
      setLoginUserEmail(data);
    }
  }, [cookies.userToken]);

  return (
    <div className="w-full h-20 flex flex-col justify-center bg-sky-300">
      <div className="w-full flex flex-row justify-center">
        <Link to={'/'} className="font-extrabold text-2xl">
          온보딩 프로젝트다.
        </Link>
      </div>
    </div>
  );
};

export default Header;
