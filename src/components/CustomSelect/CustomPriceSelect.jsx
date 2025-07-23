import { useState, useRef, useEffect } from 'react';
import s from './CustomSelect.module.css';
import clsx from 'clsx';

const CustomPriceSelect = ({ options = [], value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleSelect = option => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx(s.selectContainer, s.selectContainerPrice)}
    >
      <div className={s.selectedValue} onClick={() => setIsOpen(!isOpen)}>
        <span>{value ? `To $${value}` : placeholder}</span>
        <span className={`${s.arrow} ${isOpen ? s.arrowOpen : ''}`}>
          <svg width="16" height="16">
            <use href="/icons.svg#icon-arrow-down"></use>
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className={s.containerOptionsList}>
          <ul className={clsx(s.optionsList, s.optionsListPrice)}>
            {options.map(option => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={`${s.option} ${option === value ? s.selected : ''}`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomPriceSelect;
