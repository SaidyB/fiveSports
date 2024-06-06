// src/components/DualMonthCalendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DualMonthCalendar.css';

const DualMonthCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const tileDisabled = ({ date }) => {
    const today = new Date();
    const endOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);
    // Devuelve true para las fechas anteriores al día actual del mes actual
    // o para las fechas posteriores al último día del mes siguiente al actual
    return date < today || date > endOfNextMonth;
  };

  return (
    <div className="dual-month-calendar">
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileDisabled={tileDisabled}
        selectRange={true}
        minDetail="month"
        maxDetail="month"
        showNeighboringMonth={false}
        showDoubleView={true}
      />
    </div>
  );
};

export default DualMonthCalendar;
