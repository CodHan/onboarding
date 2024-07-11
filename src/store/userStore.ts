import { create } from 'zustand';

type Store = {
  loginUserEmail: string;
  setLoginUserEmail: (arg: string) => void;
};

const useUserStore = create<Store>()((set) => ({
  loginUserEmail: '',
  setLoginUserEmail: (arg) => set({ loginUserEmail: arg }),
}));

export default useUserStore;
