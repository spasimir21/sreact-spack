import { LayoutContent } from '@lib/client/ssr';
import React, { Suspense } from 'react';

function Layout() {
  return (
    <Suspense>
      <div
        style={{
          display: 'grid',
          position: 'fixed',
          top: '0px',
          left: '0px',
          width: '100vw',
          height: '100vh',
          placeItems: 'center'
        }}
      >
        <LayoutContent />
      </div>
    </Suspense>
  );
}

export { Layout };
