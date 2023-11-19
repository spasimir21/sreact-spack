import { Outlet } from 'react-router-dom';
import { isClient } from './isClient';
import React from 'react';

function LayoutContent() {
  return isClient() ? <Outlet /> : <div id='layout-content'></div>;
}

export { LayoutContent };
