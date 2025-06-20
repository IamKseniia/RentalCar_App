import s from './CarCard.module.css';
import { Link } from 'react-router-dom';

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

  const city = address.split(',')[1];
  const country = address.split(',')[2];

  const formatMileage = mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return (
    <div>
      <img src={img} alt={`${brand} ${model}`} className={s.image} />
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
