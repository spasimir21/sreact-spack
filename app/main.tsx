import { initializeReactRoot } from '@lib/client/ssr';
import { router } from './router';

async function main() {
  const root = document.querySelector('#root')!;

  initializeReactRoot(root, router);
}

document.addEventListener('DOMContentLoaded', main);
