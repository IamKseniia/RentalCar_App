import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './Layout/Layout.jsx';
import Loader from './Loader/Loader.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage.jsx'));
const CarDetailsPage = lazy(() =>
  import('../pages/CarDetailsPage/CarDetailsPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage.jsx')
);

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<CarDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
};

export default App;
