import { deinitializeSSRData, initializeSSRData, isSSR } from './SSRData';
import ReactDOM from 'react-dom/client';
import { ReactElement } from 'react';

function initializeReactRoot(container: Element, element: ReactElement) {
  initializeSSRData();

  if (isSSR()) ReactDOM.hydrateRoot(container, element);
  else ReactDOM.createRoot(container).render(element);

  deinitializeSSRData();
}

export { initializeReactRoot };
