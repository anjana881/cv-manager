import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Modal from "react-modal";
import interviewer from "./Interviewer";

const MeetingForm = ({
  selectedDate,
  onClose,
  onSubmit,
  onDelete,
  eventData,
  interviewers,
}) => {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedInterviewer, setSelectedInterviewer] = useState("");

  const handleInterviewerChange = (event) => {
    setSelectedInterviewer(event.target.value);
  };
  console.log("interviewer", interviewer);
  useEffect(() => {
    if (eventData) {
      setTitle(eventData.title || "");
      setStartTime(
        eventData.start
          ? eventData.start.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : ""
      );
      setEndTime(
        eventData.end
          ? eventData.end.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : ""
      );
      setSelectedInterviewer(eventData.selectedInterviewer || "");
    } else if (selectedDate) {
      const formattedTime = selectedDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setStartTime(formattedTime);
      setEndTime(formattedTime);
    }
  }, [eventData, selectedDate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      startTime: new Date(`2000-01-01T${startTime}`),
      endTime: new Date(`2000-01-01T${endTime}`),
      selectedInterviewer,
    });

    // Clear form inputs after submission
    setTitle("");
    setStartTime("");
    setEndTime("");
    setSelectedInterviewer("");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      onDelete(eventData);
      onClose();
    }
  };
  console.log("handleDelete", handleDelete);

  return (
    <Modal isOpen={true} onRequestClose={onClose} contentLabel="Meeting Form">
      <h2>{eventData ? "Edit Meeting" : "Schedule a Meeting"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Start Time:
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          End Time:
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
        <br />
        <div>
          <label>Select Interviewer: </label>
          <select
            value={selectedInterviewer}
            onChange={handleInterviewerChange}
          >
            <option value="">Select an Interviewer</option>
            {interviewers?.map((interviewer) => (
              <option key={interviewer.Id} value={interviewer.Name}>
                {interviewer.Name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">
          {eventData ? "Update Meeting" : "Schedule Meeting"}
        </button>
        {eventData && (
          <button type="button" onClick={handleDelete}>
            <AiFillDelete />
          </button>
        )}
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default MeetingForm;
