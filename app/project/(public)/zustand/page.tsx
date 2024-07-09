'use client';

import { products } from '@/data';
import { useStore } from '@/store/store';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

export default function CommercePage() {
  const addProduct = useStore(state => state.addProduct);
  const cartProducts = useStore(state => state.products);

  return (
    <section>
      <div>Shopping Cart with Zustand</div>

      <div className="flex items-start mt-10">
        <div className="space-y-3">
          {products.map(product => (
            <div className="border border-white p-3" key={product.id}>
              <div>{product.price}</div>
              <div>{product.title}</div>

              {cartProducts.find(item => item.id === product.id) ? (
                <ChangeQtyButton productId={product.id} />
              ) : (
                <button onClick={() => addProduct(product)}>Add to Cart</button>
              )}
            </div>
          ))}
        </div>

        <Carts />
      </div>
    </section>
  );
}

function Carts() {
  const { reset, removeProduct, total, address, cartProducts, addProduct } = useStore(
    useShallow(state => ({
      cartProducts: state.products,
      reset: state.reset,
      products: state.products,
      removeProduct: state.removeProduct,
      total: state.total,
      address: state.address,
      addProduct: state.addProduct,
    })),
  );

  return (
    <div>
      <div>Total Cart: ${total}</div>
      <button onClick={reset}>Reset</button>
      <div className="space-y-3">
        {cartProducts.map(product => (
          <div className="border border-white p-3" key={product.id}>
            <div>{product.price}</div>
            <div>{product.title}</div>
            <button onClick={() => removeProduct(product.id)}>Delete</button>
            {cartProducts.find(item => item.id === product.id) ? (
              <ChangeQtyButton productId={product.id} />
            ) : (
              <button onClick={() => addProduct(product)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ChangeQtyButton({ productId }: { productId: string }) {
  const { getProductById, decQty, incQty, setTotal } = useStore(
    useShallow(state => ({
      getProductById: state.getProductById,
      decQty: state.decQty,
      incQty: state.incQty,
      setTotal: state.setTotal,
    })),
  );

  const product = getProductById(productId);

  useEffect(() => {
    const unSub = useStore.subscribe(
      state => state.products,
      products => {
        setTotal(products.reduce((acc, item) => acc + item.price * item.qty, 0));
      },
      { fireImmediately: true },
    );
    return unSub;
  }, [setTotal]);

  return (
    <>
      {product && (
        <div className="flex gap-2 items-center">
          <button onClick={() => decQty(product.id)}>-</button>
          <p>{product.qty}</p>
          <button onClick={() => incQty(product.id)}>+</button>
        </div>
      )}
    </>
  );
}
