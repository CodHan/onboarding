import useGetUserInfo from '../hooks/useGetUserInfo';

const Home = () => {
  const { data } = useGetUserInfo();

  return (
    <>
      <div className="flex w-full justify-center">
        {data ? (
          <h1 className="font-bold text-4xl">{`${data.nickName} 님 환영 합니다.`}</h1>
        ) : (
          <h1 className="font-bold text-4xl">로그인이 되어있지 않습니다.</h1>
        )}
      </div>
    </>
  );
};

export default Home;
