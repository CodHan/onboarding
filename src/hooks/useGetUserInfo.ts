import { useQuery } from '@tanstack/react-query';
import useUserStore from '../store/userStore';
import { getUserInfo } from '../api/auth';
import { QUERY_KEY } from '../utils/query_key';

const useGetUserInfo = () => {
  const { loginUserEmail } = useUserStore();

  const { data } = useQuery({
    queryKey: [QUERY_KEY.userInfo],
    queryFn: () => getUserInfo(loginUserEmail),
    enabled: !!loginUserEmail,
  });

  return { data };
};

export default useGetUserInfo;
