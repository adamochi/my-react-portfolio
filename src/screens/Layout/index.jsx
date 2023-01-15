import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from '../../components/TopNavBar';
import './index.scss';

function Layout() {
  return (
    <>
      <TopNavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
