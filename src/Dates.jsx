import React, { useState, useEffect } from "react";

const Dates = () => {
  // Initialize state with current date/time immediately
  const getCurrentDateTime = () => {
    const now = new Date();
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const formattedDate = now.toLocaleDateString("en-US", options);
    const formattedTime = now.toLocaleTimeString();
    return `${formattedDate} - 🕒 ${formattedTime}`;
  };

  const [dateTime, setDateTime] = useState(getCurrentDateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(getCurrentDateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div className="date">📅 {dateTime} ⏰</div>;
};

export default Dates;
