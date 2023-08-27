import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { AiFillDelete } from "react-icons/ai";

const MeetingForm = ({
  selectedDate,
  onClose,
  onSubmit,
  onDelete,
  eventData,
}) => {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

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
    });

    // Clear form inputs after submission
    setTitle("");
    setStartTime("");
    setEndTime("");
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
