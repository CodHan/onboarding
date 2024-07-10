import { create } from 'zustand';

type Store = {
  email: string;
  setEmail: (arg: string) => void;
  isLogin: boolean;
  setIsLogin: (arg: boolean) => void;
};

const useUserStore = create<Store>()((set) => ({
  email: '',
  setEmail: (arg) => set({ email: arg }),
  isLogin: false,
  setIsLogin: (arg) => set({ isLogin: arg }),
}));

export default useUserStore;
