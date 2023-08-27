import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import MeetingForm from "./MeetingForm";

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
  const handleEventDelete = (arg) => {
    console.log("handleEventDelete triggered");
    const eventToDelete = arg.event; // Get the event object

    // Compare events based on their properties (title, start, and end)
    const updatedEvents = events.filter((event) => {
      return (
        event.title !== eventToDelete.title ||
        event.start.getTime() !== eventToDelete.start.getTime() ||
        event.end.getTime() !== eventToDelete.end.getTime()
      );
    });

    setEvents(updatedEvents);
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
          onDelete={handleEventDelete}
        />
      )}
    </div>
  );
};

export default Calendar1;
