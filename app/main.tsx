import { initializeReactRoot } from '@lib/client/ssr';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

async function main() {
  const root = document.querySelector('#root')!;

  initializeReactRoot(root, <RouterProvider router={router} />);
}

document.addEventListener('DOMContentLoaded', main);
