import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/cars/operations.js';
import {
  selectCars,
  selectLoading,
  selectPage,
  selectTotalPages,
} from '../../redux/cars/selectors.js';

import CarCard from '../../components/CarCard/CarCard.jsx';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton.jsx';

import s from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectLoading);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchCars({ page: 1 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchCars({ page: page + 1 }));
  };

  return (
    <div className="container">
      <ul className={s.grid}>
        {cars.map(car => (
          <li key={car.id} className={s.item}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>

      {!isLoading && page < totalPages && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default CatalogPage;
