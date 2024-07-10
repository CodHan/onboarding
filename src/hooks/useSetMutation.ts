import { QueryKey, useMutation, useQueryClient } from '@tanstack/react-query';

const useSetMutation = (
  fc: (arg: any) => Promise<unknown>,
  queryKey: QueryKey
) => {
  const queryClient = useQueryClient();
  const { mutate, error } = useMutation({
    mutationFn: fc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
    onError: (error) => {
      console.error('Mutation error:', error);
    },
  });
  return { mutate, error };
};

export default useSetMutation;
