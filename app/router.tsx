import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import React, { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Item = lazy(() => import('./pages/Item'));

const router = (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/item/:name' element={<Item />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export { router };
