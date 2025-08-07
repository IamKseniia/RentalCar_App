import s from './BookCar.module.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

const BookCar = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    comment: '',
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Invalid email';
    }
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix form errors.');
      return;
    }

    setErrors({});
    toast.success('Booking request sent successfully!');
    setForm({ name: '', email: '', date: '', comment: '' });
    setSelectedDate(null);
  };

  return (
    <div className={s.layout}>
      <h3 className={s.littleTitle}>Book your car now</h3>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>

      <form onSubmit={handleSubmit} className={s.form}>
        <label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name*"
            className={s.input}
          />
          {errors.name && <span className={s.error}>{errors.name}</span>}
        </label>

        <label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email*"
            className={s.input}
          />
          {errors.email && <span className={s.error}>{errors.email}</span>}
        </label>

        <label>
          <DatePicker
            selected={selectedDate}
            onChange={date => {
              setSelectedDate(date);
              setForm(prev => ({
                ...prev,
                date: date ? date.toISOString().split('T')[0] : '',
              }));
            }}
            placeholderText="Booking date"
            dateFormat="dd.MM.yyyy"
            minDate={new Date()}
            isClearable
            className={s.input}
          />
          {errors.date && <span className={s.error}>{errors.date}</span>}
        </label>

        <label>
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            placeholder="Comment"
            className={s.textarea}
          />
        </label>

        <button type="submit" className={s.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookCar;
