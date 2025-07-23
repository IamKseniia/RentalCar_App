import { useState, useRef, useEffect } from 'react';
import s from './CustomSelect.module.css';

const CustomBrandSelect = ({ options = [], value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleSelect = option => {
    onChange(option);
    setIsOpen(false);
  };

  // Закриття списку при кліку поза селектом
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
    <div ref={containerRef} className={s.selectContainer}>
      <div className={s.selectedValue} onClick={() => setIsOpen(!isOpen)}>
        <span>{value || placeholder}</span>
        <span className={`${s.arrow} ${isOpen ? s.arrowOpen : ''}`}>
          <svg width="16" height="16">
            <use href="/icons.svg#icon-arrow-down"></use>
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className={s.containerOptionsList}>
          <ul className={s.optionsList}>
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

export default CustomBrandSelect;
