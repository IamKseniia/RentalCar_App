import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export default function Header() {
  function isActiveClass({ isActive }) {
    return isActive ? s.isActive : '';
  }

  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <svg width="104" height="16">
            <use xlinkHref="/icons.svg#icon-logo" />
          </svg>
          <ul className={s.list}>
            <li className={s.item}>
              <NavLink className={isActiveClass} to="/">
                Home
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink className={isActiveClass} to="/catalog">
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
