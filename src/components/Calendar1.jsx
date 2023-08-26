// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import MeetingForm from "./MeetingForm"; // Import your meeting form component

// const Calendar1 = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [events, setEvents] = useState([]); // Manage events data here

//   const handleDateClick = (arg) => {
//     setSelectedDate(arg.date);
//     setShowForm(true);
//   };

//   const handleFormClose = () => {
//     setShowForm(false);
//     setSelectedDate(null);
//   };

//   const handleFormSubmit = (meetingData) => {
//     // Create a new event object from the form data
//     const newEvent = {
//       title: meetingData.title,
//       start: new Date(
//         selectedDate.getFullYear(),
//         selectedDate.getMonth(),
//         selectedDate.getDate(),
//         meetingData.startTime.getHours(),
//         meetingData.startTime.getMinutes()
//       ),
//       end: new Date(
//         selectedDate.getFullYear(),
//         selectedDate.getMonth(),
//         selectedDate.getDate(),
//         meetingData.endTime.getHours(),
//         meetingData.endTime.getMinutes()
//       ),
//     };

//     // Update the events state with the new event
//     setEvents([...events, newEvent]);

//     // Close the form
//     handleFormClose();
//   };
//   const handleEventClick = (arg) => {
//     // Open the MeetingForm with event details for editing
//     setShowForm(true);
//     setSelectedDate(arg.event.start);
//   };
//   return (
//     <div className="bg-white w-full p-12">
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         headerToolbar={{
//           start: "today prev,next",
//           center: "title",
//           end: "dayGridMonth,,timeGridDay,timeGridWeek",
//         }}
//         height="90vh"
//         dateClick={handleDateClick}
//         events={events} // Pass the events data to FullCalendar
//       />
//       {showForm && (
//         <MeetingForm
//           selectedDate={selectedDate}
//           onClose={handleFormClose}
//           onSubmit={handleFormSubmit}
//         />
//       )}
//     </div>
//   );
// };

// export default Calendar1;
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import MeetingForm from "./MeetingForm"; // Import your meeting form component

const Calendar1 = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.date);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setSelectedDate(null);
  };

  const handleFormSubmit = (meetingData) => {
    const newEvent = {
      title: meetingData.title,
      start: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        meetingData.startTime.getHours(),
        meetingData.startTime.getMinutes()
      ),
      end: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        meetingData.endTime.getHours(),
        meetingData.endTime.getMinutes()
      ),
    };

    setEvents([...events, newEvent]);
    handleFormClose();
  };

  const handleEventClick = (arg) => {
    // Open the MeetingForm with event details for editing
    setShowForm(true);
    setSelectedDate(arg.event.start);
  };

  return (
    <div className="bg-white w-full p-12">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,,timeGridDay,timeGridWeek",
        }}
        height="90vh"
        dateClick={handleDateClick}
        events={events}
        editable={true} // Enable event editing
        eventClick={handleEventClick} // Handle event click for editing
      />
      {showForm && (
        <MeetingForm
          selectedDate={selectedDate}
          onClose={handleFormClose}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default Calendar1;
