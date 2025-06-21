import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchCars } from '../../redux/cars/operations.js';
import {
  selectCars,
  selectLoading,
  selectPage,
  selectTotalPages,
} from '../../redux/cars/selectors.js';

import CarCard from '../../components/CarCard/CarCard.jsx';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton.jsx';
import FilterPanel from '../../components/FilterPanel/FilterPanel';

import s from './CatalogPage.module.css';
import { resetCars } from '../../redux/cars/slice.js';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectLoading);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const didFetch = useRef(false);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;

    dispatch(resetCars());
    dispatch(fetchCars({ page: 1 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchCars({ page: page + 1 }));
  };

  console.log('page:', page, 'totalPages:', totalPages);

  return (
    <div className="container-in">
      <FilterPanel />
      <ul className={s.grid}>
        {cars.map(car => (
          <li key={car.id} className={s.item}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>

      {page < totalPages && (
        <LoadMoreButton onClick={handleLoadMore} disabled={isLoading} />
      )}
    </div>
  );
};

export default CatalogPage;
