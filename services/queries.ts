import useSWR from 'swr';

import { Product } from '@/types/product';
import { User } from '@/types/user';
import { logger } from '@/utils/logger';

export function useUser() {
  return useSWR<User>('/users/1', { use: [logger] });
}

export function useProduct() {
  const { data: userData } = useUser();

  return useSWR<Product[]>(userData ? '/products' : null, { use: [logger] });
}
