import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DualMonthCalendar.css";
import moment from "moment";

const DualMonthCalendar = ({ onDateChange, reservations }) => {
  const [date, setDate] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  const isDateReserved = (date) => {
    return reservations.some((reservation) => {
      const reservationStart = moment(reservation.fromDate);
      const reservationEnd = moment(reservation.toDate);
      return date >= reservationStart && date <= reservationEnd;
    });
  };

  const tileDisabled = ({ date }) => {
    const today = new Date();
    return (
      date < new Date(today.getFullYear(), today.getMonth(), today.getDate()) ||
      isDateReserved(date)
    );
  };

  const tileClassName = ({ date }) => {
    if (isDateReserved(date)) {
      return "reserved-date";
    }
    return null;
  };

  return (
    <div className="dual-month-calendar">
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
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
