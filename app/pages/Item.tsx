import { SSRLink, useSSRState } from '@lib/client/ssr';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';

function Item() {
  const routeParams = useParams();

  const [name, setName] = useSSRState('itemName', routeParams.id);

  useEffect(() => {
    console.log(name);
  }, []);

  return (
    <div>
      <p>Item {name}</p>
      <button onClick={() => setName(Math.random().toString(36).slice(2, 9))}>Randomize</button>
      <SSRLink to='/'>Home</SSRLink>
      {/* <img src='/latticeboltzmann.png' /> */}
    </div>
  );
}

export { Item };
