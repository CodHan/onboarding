import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { decodingInfo } from '../../api/jwt';
import useUserStore from '../../store/userStore';

const Header = () => {
  const [cookies] = useCookies();

  const { setEmail } = useUserStore();

  useEffect(() => {
    if (cookies.userToken) {
      const data = decodingInfo(cookies.userToken);
      setEmail(data);
    }
  }, []);

  return (
    <div className="w-full h-20 flex flex-col justify-center bg-sky-300">
      <div className="w-full flex flex-row justify-center">
        <h1 className="font-extrabold text-2xl">온보딩 프로젝트다.</h1>
      </div>
    </div>
  );
};

export default Header;
