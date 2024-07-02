import { CartState, CartStore, Product } from '@/types/store/cart.store';
import { StateCreator } from 'zustand';

const initState: CartState = {
  products: [],
  total: 0,
};

export const userCartCreator: StateCreator<CartStore, [['zustand/immer', CartStore]]> = (set, get) => ({
  ...initState,
  addProduct: product =>
    set(state => {
      // Check if the product already exists in the cart
      const existingProductIndex = state.products.findIndex(p => p.id === product.id);
      // If found, increment the quantity
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].qty += 1;
      }
      // else add the product to the cart with a quantity of 1
      state.products.push({ ...product, qty: 1 });
    }),

  removeProduct: productId =>
    set(state => {
      state.products = state.products.filter(product => product.id !== productId);
    }),

  incQty: productId =>
    set(state => {
      // Find the product by ID
      const product = state.products.find(product => product.id === productId);
      if (product) {
        product.qty += 1;
      }
    }),

  decQty: productId =>
    set(state => {
      // Find the product by ID
      const index = state.products.findIndex(product => product.id === productId);
      if (index !== -1) {
        const product = state.products[index];
        // If the quantity is greater than 1, decrement it
        if (product.qty > 1) {
          product.qty -= 1;
        }
        // else the quantity is 1, remove the product from the cart
        state.products.splice(index, 1);
      }
    }),
  setTotal: () =>
    set(state => {
      state.total = state.products.reduce((total, product) => total + product.price * product.qty, 0);
    }),
  getProductById: productId => get().products.find(product => product.id === productId),
  reset: () => set(() => initState),
});
