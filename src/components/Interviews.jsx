import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const Interviews = () => {
  const [onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} />
    </div>
  );
};

export default Interviews;
