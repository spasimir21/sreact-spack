import { SSRLink } from '@lib/client/ssr';
import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <br />
      <SSRLink to='/products'>Products</SSRLink>
      {/* <img src='/latticeboltzmann.png' /> */}
    </div>
  );
}

export default Home;
export { Home };
