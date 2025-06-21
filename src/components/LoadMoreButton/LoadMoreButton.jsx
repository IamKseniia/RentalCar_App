import s from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={s.button}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
