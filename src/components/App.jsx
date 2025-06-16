import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// import Layout from './Layout/Layout.jsx';

import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';

import Header from './Header/Header.jsx';
import Loader from './Loader/Loader.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage.jsx'));
const CarDetailsPage = lazy(() =>
  import('../pages/CarDetailsPage/CarDetailsPage.jsx')
);

const App = () => {
  return (
    <>
      {/* <Layout> */}
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {/* </Layout> */}
    </>
  );
};

export default App;
