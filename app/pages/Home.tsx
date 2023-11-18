import { SSRLink } from '@lib/client/ssr';
import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <SSRLink to='/item/frontend'>Item</SSRLink>
      {/* <img src='/latticeboltzmann.png' /> */}
    </div>
  );
}

export { Home };
