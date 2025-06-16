// import sprite from '../../images/sprite.svg';
// import Button from '../Button/Button';
// import EquipmentFilter from '../Filters/EquipmentFilter/EquipmentFilter';
// import TypeFilter from '../Filters/TypeFilter/TypeFilter';
// import s from './Filter.module.css';

const FilterPanel = () => {
  return (
    <div>
      <label>
        Car brand
        <div>
          <input type="text" placeholder="Choose a brand" />
        </div>
      </label>
      <label>
        Price/ 1 hour
        <div>
          <input type="text" placeholder="Choose a price" />
        </div>
      </label>
      <label>
        Сar mileage / km
        <div>
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
        </div>
      </label>
      {/* <Button>Search</Button> */}
    </div>
  );
};

export default FilterPanel;
