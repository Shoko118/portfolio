import useSWRMutation from 'swr/mutation';
import { useProduct } from './queries';
import { createProduct } from './api';

export function useCreateProduct() {
  const { mutate } = useProduct();

  return useSWRMutation('/products', createProduct, {
    onError() {
      console.log('Create Product Error');
    },
    onSuccess(data) {
      console.log('✅ Success create product:', data);
      mutate();
      // mutate((products = []) => [...products, data], false);
    },
  });
}
