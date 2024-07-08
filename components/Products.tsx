'use client';

import { useCreateProduct } from '@/services/mutations';
import { useProduct, useUser } from '@/services/queries';
import { useEffect, useState } from 'react';

export default function Products() {
  const userQuery = useUser();
  const productQuery = useProduct();
  const { trigger, isMutating } = useCreateProduct();

  const [title, setTitle] = useState<string>('');

  async function handleCreateProduct() {
    setTitle('');
    await trigger(
      { title },
      {
        optimisticData: productQuery.data && [{ title }, ...productQuery.data],
      },
    );
  }

  const fullName = userQuery.data ? `${userQuery.data.name.firstname} ${userQuery.data.name.lastname}` : '';

  if (productQuery.isLoading || userQuery.isLoading) {
    return <>loading...</>;
  }

  return (
    <div className="mt-5">
      <div>Username: {fullName}</div>
      <div>Email: {userQuery.data?.email}</div>

      <div className="mt-4 mb-1">Product lists:</div>
      <div>
        {productQuery.data?.map((item, index) => (
          <li key={index} className="list-decimal">
            {item.title}
          </li>
        ))}
      </div>

      <div className="flex items-center space-x-2 mt-7">
        <input onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder="Product Title" className="rounded-md px-3 py-2 outline-none text-black" />
        <button onClick={handleCreateProduct} className="px-3 py-2 bg-slate-500 rounded-md" disabled={isMutating || productQuery.isValidating}>
          {isMutating ? 'Creating...' : 'Create'}
        </button>
      </div>
    </div>
  );
}
