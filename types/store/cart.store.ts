export type Product = {
  id: string;
  title: string;
  price: number;
};

export type CartProduct = Product & { qty: number };

export type CartState = {
  products: CartProduct[];
  total: number;
};

export type CartActions = {
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  incQty: (productId: string) => void;
  decQty: (productId: string) => void;
  setTotal: (total: number) => void;
  getProductById: (productId: string) => CartProduct | undefined;
  reset: () => void;
};

export type CartStore = CartState & CartActions;
