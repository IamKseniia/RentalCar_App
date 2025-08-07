import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCarById } from '../../api.js';
import CarDetailsInformation from '../../components/CarDetailsInformation/CarDetailsInformation.jsx';
import BookCar from '../../components/BookCar/BookCar';
import s from './CarDetailsPage.module.css';

const CarDetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const data = await getCarById(id);
        setCar(data);
      } catch (err) {
        setError('Car not found.');
      }
    };

    fetchCar();
  }, [id]);

  if (error) return <div className="container-in">{error}</div>;
  if (!car) return <div className="container-in">Loading...</div>;

  return (
    <div className="container-in">
      <div className={s.layout}>
        <div className={s.left}>
          <img src={car.img} alt={car.model} className={s.image} />
          <BookCar />
        </div>
        <div className={s.right}>
          <CarDetailsInformation car={car} />
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
