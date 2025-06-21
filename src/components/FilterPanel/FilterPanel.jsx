import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import s from './FilterPanel.module.css';
import { setFilters } from '../../redux/filters/slice';
import { resetCars } from '../../redux/cars/slice';
import { fetchCars } from '../../redux/cars/operations';

const FilterPanel = () => {
  const dispatch = useDispatch();

  const [brands, setBrands] = useState([]);
  const [priceOptions, setPriceOptions] = useState([]);

  const [form, setForm] = useState({
    brand: '',
    price: '',
    minMileage: '',
    maxMileage: '',
  });

  // Запит брендів і цін
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [{ data: brands }, { data: carsData }] = await Promise.all([
          axios.get('https://car-rental-api.goit.global/brands'),
          axios.get('https://car-rental-api.goit.global/cars', {
            params: { page: 1, limit: 100 },
          }),
        ]);

        setBrands(brands);

        const prices = carsData.cars.map(car => Number(car.rentalPrice));
        const maxPrice = Math.max(...prices);
        const minPrice = Math.min(...prices);
        const roundedMax = Math.ceil(maxPrice / 10) * 10;
        const roundedMin = Math.floor(minPrice / 10) * 10;

        const generatedPrices = [];
        for (let i = roundedMin; i <= roundedMax; i += 10) {
          generatedPrices.push(i);
        }

        setPriceOptions(generatedPrices);
      } catch (error) {
        console.error('Failed to fetch filter data:', error);
      }
    };

    fetchInitialData();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setFilters(form));
    dispatch(resetCars());
    dispatch(fetchCars({ page: 1, ...form }));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Brand:
        <select name="brand" value={form.brand} onChange={handleChange}>
          <option value="">All</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>

      <label className={s.label}>
        Price ($/h):
        <select name="price" value={form.price} onChange={handleChange}>
          <option value="">All</option>
          {priceOptions.map(price => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </label>

      <label className={s.label}>
        Mileage from:
        <input
          type="number"
          name="minMileage"
          value={form.minMileage}
          onChange={handleChange}
          min="0"
        />
      </label>

      <label className={s.label}>
        Mileage to:
        <input
          type="number"
          name="maxMileage"
          value={form.maxMileage}
          onChange={handleChange}
          min={form.minMileage || 0}
        />
      </label>

      <button type="submit" className={s.button}>
        Apply filters
      </button>
    </form>
  );
};

export default FilterPanel;
