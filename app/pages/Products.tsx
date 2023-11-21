import { SSRLink, useSSRState } from '@lib/client/ssr';
import { IProduct } from '@server/types/IProduct';
import React, { useEffect } from 'react';

function Products() {
  const [products, setProducts] = useSSRState<IProduct[] | null>('products', null);

  useEffect(() => {
    if (products != null) return;
    fetch('/api/products').then(async res => setProducts(await res.json()));
  }, []);

  return (
    <div>
      {products ? (
        products.map(p => (
          <p key={p.id} className='text-lg'>
            {p.name} - {p.description}
          </p>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <br />
      <SSRLink to='/'>Home</SSRLink>
    </div>
  );
}

export default Products;
export { Products };
