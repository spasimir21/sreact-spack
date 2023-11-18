import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Item } from './pages/Item';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/item/:id',
    element: <Item />
  }
]);

export { router };
