import useUserStore from '../store/userStore';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../api/auth';

const Home = () => {
  const { email } = useUserStore();

  const { data } = useQuery({
    queryKey: ['loginUser'],
    queryFn: () => getUserInfo(email),
    enabled: !!email,
  });

  return (
    <>
      <div className="flex w-full justify-center">
        {!data ? (
          <h1 className="font-bold text-4xl">로그인이 되어있지 않습니다.</h1>
        ) : (
          <h1 className="font-bold text-4xl">{`${data.nickName} 님 환영 합니다.`}</h1>
        )}
      </div>
    </>
  );
};

export default Home;
