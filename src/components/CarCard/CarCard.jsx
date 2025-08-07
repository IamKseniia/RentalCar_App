import s from './CarCard.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/favorites/slice';

const CarCard = ({ car }) => {
  const {
    id,
    year,
    brand,
    model,
    type,
    img,
    rentalPrice,
    rentalCompany,
    mileage,
    address,
  } = car;

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.includes(id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(id));
  };

  const city = address.split(',')[1];
  const country = address.split(',')[2];

  const formatMileage = mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <img src={img} alt={`${brand} ${model}`} className={s.image} />
        <button onClick={handleFavoriteClick} className={s.favoriteBtn}>
          {isFavorite ? (
            <span>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-heart-active"></use>
              </svg>
            </span>
          ) : (
            <span>
              <svg width="16" height="16">
                <use href="/icons.svg#icon-heart-default"></use>
              </svg>
            </span>
          )}
        </button>
      </div>
      <div className={s.info}>
        <div className={s.top}>
          <h2 className={s.title}>
            {brand} <span className={s.blue}>{model}</span>, {year}
          </h2>
          <span className={s.price}>{rentalPrice}$</span>
        </div>
        <div className={s.details}>
          <ul className={s.detailsList}>
            <li className={s.detailsItem}>{city}</li>
            <li className={s.detailsItem}>{country}</li>
            <li className={s.detailsItem}>{rentalCompany}</li>
          </ul>
          <ul className={s.detailsList}>
            <li className={s.detailsItem}>{type}</li>
            <li>{formatMileage} km</li>
          </ul>
        </div>
        <Link to={`/catalog/${id}`} className={s.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
