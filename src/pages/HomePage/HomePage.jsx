import s from './HomePage.module.css';

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <div className={s.content}>
          <h1 className={s.title}>Find your perfect rental car</h1>
          <p className={s.text}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <Link to="/catalog" className={s.link}>
            View Catalog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
