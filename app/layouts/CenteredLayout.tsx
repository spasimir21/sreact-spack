import { LayoutContent } from '@lib/client/ssr';
import React, { Suspense } from 'react';

function CenteredLayout() {
  return (
    <Suspense>
      <div className='grid fixed top-0 left-0 w-screen h-screen place-items-center text-center'>
        <LayoutContent />
      </div>
    </Suspense>
  );
}

export { CenteredLayout };
