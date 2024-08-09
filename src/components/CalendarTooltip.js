import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the default CSS for react-calendar
import "./App.css"; // Ensure this path is correct

const CalendarTooltip = ({ date }) => {
  return (
    <div className="calendar-tooltip">
      <Calendar
        value={date}
        view="month"
        showNavigation={true}
        showNeighboringMonth={true}
      />
    </div>
  );
};

export default CalendarTooltip;
