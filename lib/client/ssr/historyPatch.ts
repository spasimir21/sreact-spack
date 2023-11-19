import { deinitializeSSRData } from './SSRData';
import { isClient } from './isClient';

function patchHistory() {
  const _pushState = history.pushState;

  // @ts-ignore
  history.pushState = (...args: any) => {
    deinitializeSSRData();
    _pushState.apply(history, args);
  };
}

if (isClient()) patchHistory();
