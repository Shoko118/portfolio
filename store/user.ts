import { UserStore } from '@/types/store/user.store';
import { StateCreator } from 'zustand';

export const userStoreCreator: StateCreator<UserStore, [['zustand/immer', UserStore]]> = set => ({
  userName: '',
  fullName: '',
  age: 0,
  address: '',
  setAddress: address =>
    set(state => {
      state.address = address;
    }),
});
