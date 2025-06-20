// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { incrementPage, fetchCars } from '../redux/carsSlice';

// const LoadMore = () => {
//   const dispatch = useDispatch();
//   const { loading, hasMore, filters } = useSelector(state => state.cars);

//   const handleClick = () => {
//     dispatch(incrementPage());
//     dispatch(fetchCars());
//   };

//   if (!hasMore) return null;

//   return (
//     <button onClick={handleClick} disabled={loading}>
//       {loading ? 'Loading...' : 'Load More'}
//     </button>
//   );
// };

// export default LoadMore;

// // src/components/LoadMore.jsx
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCars } from '../../redux/cars/carsSlice.js';
// import s from './LoadMoreButton.module.css';

// const LoadMore = () => {
//   const dispatch = useDispatch();
//   const { loading, hasMore } = useSelector(state => state.cars);

//   const handleClick = () => {
//     dispatch(fetchCars());
//   };

//   if (!hasMore) return null;

//   return (
//     <div className={s.wrapper}>
//       <button onClick={handleClick} disabled={loading} className={s.button}>
//         {loading ? 'Loading...' : 'Load More'}
//       </button>
//     </div>
//   );
// };

// export default LoadMore;

import s from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.button}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
