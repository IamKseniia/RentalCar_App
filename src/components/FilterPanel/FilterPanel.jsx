import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import s from './FilterPanel.module.css';
import { setFilters } from '../../redux/filters/slice';
import { resetCars } from '../../redux/cars/slice';
import { fetchCars } from '../../redux/cars/operations';
import CustomBrandSelect from '../CustomSelect/CustomBrandSelect.jsx';
import CustomPriceSelect from '../CustomSelect/CustomPriceSelect.jsx';

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

  const formatNumberWithComma = value => {
    const cleaned = value.replace(/\D/g, '');
    if (!cleaned) return '';
    return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const parseNumber = value => value.replace(/,/g, '');

  const handleChange = e => {
    const { name, value } = e.target;

    // Дозволити тільки цифри та коми
    const numericValue = value.replace(/[^\d]/g, '');

    const formattedValue = formatNumberWithComma(numericValue);

    setForm(prev => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const cleanedForm = {
      ...form,
      minMileage: parseNumber(form.minMileage),
      maxMileage: parseNumber(form.maxMileage),
    };

    dispatch(setFilters(cleanedForm));
    dispatch(resetCars());
    dispatch(fetchCars({ page: 1, ...cleanedForm }));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.list}>
        <label className={s.label}>
          Car brand
          <CustomBrandSelect
            value={form.brand}
            onChange={value => setForm(prev => ({ ...prev, brand: value }))}
            options={brands}
            placeholder="Choose a brand"
          />
        </label>
        <label className={s.label}>
          Price/ 1 hour
          <CustomPriceSelect
            options={priceOptions}
            value={form.price}
            onChange={value =>
              setForm(prev => ({
                ...prev,
                price: value,
              }))
            }
            placeholder="Choose a price"
          />
        </label>
        <div>
          <p className={s.text}>Сar mileage / km</p>
          <div className={s.fieldInput}>
            <div className={s.fieldInputFrom}>
              <label className={s.textFieldLabel} for="from">
                From
              </label>
              <input
                type="text"
                id="from"
                name="minMileage"
                value={form.minMileage}
                onChange={handleChange}
                className={s.input}
              />
            </div>
            <div className={s.fieldInputTo}>
              <label className={s.textFieldLabel} for="to">
                To
              </label>
              <input
                type="text"
                id="to"
                name="maxMileage"
                value={form.maxMileage}
                onChange={handleChange}
                className={s.input}
              />
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
};

export default FilterPanel;
