import React, { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DualMonthCalendar.css';
import { ContextGlobal } from '../utils/GlobalContextReducer';

const DualMonthCalendar = () => {
  const { dispatch } = useContext(ContextGlobal);
  const [datesRange, setDatesRange] = useState([]);

  const handleDateChange = (newDate) => {
    if (datesRange.length === 0) {
      setDatesRange([newDate]);
      dispatch({ type: 'SET_CHECKIN', payload: formatDate(newDate) });
    } else if (datesRange.length === 1) {
      if (newDate > datesRange[0]) {
        setDatesRange([datesRange[0], newDate]);
        dispatch({ type: 'SET_CHECKOUT', payload: formatDate(newDate) });
      } else {
        setDatesRange([newDate]);
        dispatch({ type: 'SET_CHECKIN', payload: formatDate(newDate) });
        dispatch({ type: 'SET_CHECKOUT', payload: '' });
      }
    } else {
      setDatesRange([newDate]);
      dispatch({ type: 'SET_CHECKIN', payload: formatDate(newDate) });
      dispatch({ type: 'SET_CHECKOUT', payload: '' });
    }
  };

  const tileDisabled = ({ date }) => {
    const today = new Date();
    return date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const tileClassName = ({ date }) => {
    if (datesRange.length === 2 && date >= datesRange[0] && date <= datesRange[1]) {
      return 'selected-date';
    }
    return '';
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString(undefined, options).replace(/\//g, '-');
  };

  return (
    <div className="dual-month-calendar">
      <Calendar
        onClickDay={handleDateChange}
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
        selectRange={false}
        minDetail="month"
        maxDetail="month"
        showNeighboringMonth={false}
        showDoubleView={true}
      />
    </div>
  );
};

export default DualMonthCalendar;
