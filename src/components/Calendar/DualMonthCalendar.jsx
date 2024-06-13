import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DualMonthCalendar.css";

const DualMonthCalendar = ({ onDateChange }) => {
  const [date, setDate] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  const tileDisabled = ({ date }) => {
    const today = new Date();
    return (
      date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
    );
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
