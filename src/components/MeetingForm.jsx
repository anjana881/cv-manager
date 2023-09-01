import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Modal from "react-modal";
const MeetingForm = ({
  selectedDate,
  onClose,
  onSubmit,
  onDelete,
  eventData,
  interviewers,
  candidates,

  selectedCandidate,
  onSelectCandidate,
}) => {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedInterviewer, setSelectedInterviewer] = useState("");

  const handleInterviewerChange = (event) => {
    setSelectedInterviewer(event.target.value);
  };
  const handleCandidateChange = (event) => {
    const selectedCandidateId = event.target.value;
    onSelectCandidate(selectedCandidateId);
  };
  console.log("candidates", candidates);
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
      selectedCandidate,
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
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Meeting Form"
      className="bg-yellow-50 text-black w-fit p-8 h-[fit] mt-20 ml-4 rounded-3xl"
    >
      <h2 className="text-center font-bold text-xl underline mb-2">
        {eventData ? "Edit Meeting" : "Schedule a Meeting"}
      </h2>
      <form onSubmit={handleSubmit}>
        <label className="flex">
          <h3 className="font-semibold text-lg mb-2 mr-2">Title:</h3>
          <input
            type="text"
            value={title}
            className="p-2 bg-slate-200 rounded-xl"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label className="flex">
          <h3 className="font-semibold text-lg mb-2 mr-2">Start Time:</h3>
          <input
            type="time"
            value={startTime}
            className="p-2 bg-slate-200 rounded-md"
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
        <br />
        <label className="flex">
          <h3 className="font-semibold text-lg mb-2 mr-2">End Time:</h3>
          <input
            type="time"
            value={endTime}
            className="p-2 bg-slate-200 rounded-md"
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
        <br />
        <div className="flex mb-2">
          <h3 className="font-semibold text-lg mb-2 mr-2">
            Select Candidate:{" "}
          </h3>
          <select
            value={selectedCandidate}
            onChange={handleCandidateChange}
            className="p-2 bg-slate-200 rounded-xl"
          >
            <option value="">Select a Candidate</option>
            {candidates?.map((candidate) => (
              <option key={candidate.Id} value={candidate.FirstName}>
                {candidate.FirstName} {candidate.LastName}
              </option>
            ))}
          </select>
        </div>

        <div className="flex">
          <h3 className="font-semibold text-lg mb-2 mr-2">
            Select Interviewer:{" "}
          </h3>
          <select
            value={selectedInterviewer}
            onChange={handleInterviewerChange}
            className="p-2 rounded-xl bg-slate-200"
          >
            <option value="">Select an Interviewer</option>
            {interviewers?.map((interviewer) => (
              <option key={interviewer.Id} value={interviewer.Name}>
                {interviewer.Name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-evenly mt-4">
          <button
            type="submit"
            className="p-3 text-black font-semibold bg-[#fd7277] rounded-2xl w-[fit]"
          >
            {eventData ? "Update Meeting" : "Schedule Meeting"}
          </button>
          {eventData && (
            <button type="button" onClick={handleDelete}>
              <AiFillDelete />
            </button>
          )}
          <button
            type="button"
            className="p-3 text-black font-semibold bg-[#fd7277] rounded-2xl w-[fit]"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default MeetingForm;
