import s from './CarDetailsInformation.module.css';
import clsx from 'clsx';

const CarDetailsInformation = ({ car }) => {
  const {
    brand,
    model,
    year,
    id,
    type,
    mileage,
    rentalPrice,
    address,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
  } = car;

  const city = address.split(',')[1];
  const country = address.split(',')[2];
  const formatMileage = mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>
        {brand} {model}, {year}
      </h1>
      <p className={clsx(s.text, s.id)}>Id: {id}</p>
      <div className={s.boxLocationMilage}>
        <svg width="16" height="16">
          <use href="/icons.svg#icon-location"></use>
        </svg>
        <div className={s.locationMilage}>
          <p className={s.text}>
            {city}, {country}
          </p>
          <p className={s.text}>Mileage: {formatMileage} km</p>
        </div>
      </div>
      <p className={s.price}>{rentalPrice}$</p>
      <p className={clsx(s.text, s.description)}>{description}</p>
      <div className={s.boxDetails}>
        <div>
          <h3 className={s.littleTitle}>Rental Conditions:</h3>
          <ul className={clsx(s.text, s.details)}>
            {rentalConditions.map((item, i) => (
              <li key={i}>
                <span className={s.icon}>
                  <svg width="16" height="16">
                    <use href="/icons.svg#icon-check-circle"></use>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={s.littleTitle}>Car Specifications:</h3>
          <ul className={clsx(s.text, s.details)}>
            <li>
              <span className={s.icon}>
                <svg width="16" height="16">
                  <use href="/icons.svg#icon-calendar"></use>
                </svg>
              </span>
              Year: {year}
            </li>
            <li>
              <span className={s.icon}>
                <svg width="16" height="16">
                  <use href="/icons.svg#icon-car"></use>
                </svg>
              </span>
              Type: {type}
            </li>
            <li>
              <span className={s.icon}>
                <svg width="16" height="16">
                  <use href="/icons.svg#icon-fuel-pump"></use>
                </svg>
              </span>
              Fuel Consumption: {fuelConsumption}
            </li>
            <li>
              <span className={s.icon}>
                <svg width="16" height="16">
                  <use href="/icons.svg#icon-gear"></use>
                </svg>
              </span>
              Engine Size: {engineSize}
            </li>
          </ul>
        </div>
        <div>
          <h3 className={s.littleTitle}>Accessories and functionalities:</h3>
          <ul className={clsx(s.text, s.details)}>
            {accessories.map((item, i) => (
              <li key={i}>
                <span className={s.icon}>
                  <svg width="16" height="16">
                    <use href="/icons.svg#icon-check-circle"></use>
                  </svg>
                </span>
                {item}
              </li>
            ))}

            {functionalities.map((item, i) => (
              <li key={i}>
                <span className={s.icon}>
                  <svg width="16" height="16">
                    <use href="/icons.svg#icon-check-circle"></use>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsInformation;
