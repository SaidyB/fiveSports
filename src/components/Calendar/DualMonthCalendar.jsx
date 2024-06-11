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
    // Comparar solo la parte de la fecha sin la hora
    return date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
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
