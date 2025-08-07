import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const getCars = async ({
  page = 1,
  brand,
  price,
  minMileage,
  maxMileage,
}) => {
  const params = {
    page,
    limit: 12,
    brand,
    rentalPrice: price,
    minMileage,
    maxMileage,
  };

  // Видаляємо undefined значення
  Object.keys(params).forEach(key => {
    if (params[key] === undefined) delete params[key];
  });

  const response = await axios.get('/cars', { params });
  return response.data;
};

export const getCarById = async id => {
  const { data } = await axios.get(`/cars/${id}`);
  return data;
};
