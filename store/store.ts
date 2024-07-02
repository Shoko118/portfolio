import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { userStoreCreator } from './user';
import { UserStore } from '@/types/store/user.store';
import { userCartCreator } from './cart';
import { CartStore } from '@/types/store/cart.store';
import { devtools, subscribeWithSelector } from 'zustand/middleware';

type Store = UserStore & CartStore;

export const useStore = create<Store>()(
  devtools(
    subscribeWithSelector(
      immer((...a) => ({
        ...userStoreCreator(...a),
        ...userCartCreator(...a),
      })),
    ),
    { name: 'Store' },
  ),
);
