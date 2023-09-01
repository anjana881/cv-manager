import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import React, { useState } from "react";
import { interviewerData } from "./Interviewer";
import MeetingForm from "./MeetingForm";
import { useLocation } from "react-router-dom";

const Calendar1 = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState();
  const location = useLocation();
  const candidates = location.state?.candidates || [];
  console.log("candidtaessSS", candidates);
  const handleDateClick = (arg) => {
    setSelectedDate(arg.date);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setSelectedDate(null);
  };

  const handleFormSubmit = (meetingData) => {
    const formattedStartTime = meetingData.startTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const formattedEndTime = meetingData.endTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    console.log("Submitting form data:", meetingData);
    const newEvent = {
      title: `Title:${meetingData.title}<br>Interviewer: ${meetingData.selectedInterviewer}<br>Candidate: ${selectedCandidate}<br>Time: ${formattedStartTime} - ${formattedEndTime}`,
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
      selectedInterviewer: meetingData.selectedInterviewer,
      selectedCandidate: selectedCandidate,
    };

    console.log("New event:", newEvent);

    setEvents([...events, newEvent]);
    handleFormClose();
  };

  const handleEventClick = (arg) => {
    console.log("Event clicked:", arg.event);
    setShowForm(true);
    setSelectedDate(arg.event.start);
  };

  const handleEventDelete = (arg) => {
    console.log("Deleting event:", arg.event);
    const eventToDelete = arg.event;

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
        editable={true}
        eventClick={handleEventClick}
        eventContent={(eventInfo) => (
          <div>
            {/* <p>{eventInfo.timeText}</p> */}
            <p dangerouslySetInnerHTML={{ __html: eventInfo.event.title }} />
          </div>
        )}
        events={events.map((event) => ({
          ...event,
          title: event.title,
        }))}
      />
      {showForm && (
        <MeetingForm
          selectedDate={selectedDate}
          onClose={handleFormClose}
          onSubmit={handleFormSubmit}
          onDelete={handleEventDelete}
          interviewers={interviewerData}
          candidates={candidates}
          // selectedCandidate={selectedCandidate}
          onSelectCandidate={setSelectedCandidate}
        />
      )}
    </div>
  );
};

export default Calendar1;
