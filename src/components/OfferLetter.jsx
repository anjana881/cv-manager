import React from "react";
import JoditEditor from "jodit-react";
import { useState } from "react";

const OfferLetter = ({
  candidates,

  selectedCandidate,
  onSelectCandidate,
}) => {
  const [jobPosition, setJobPosition] = useState("");
  const [offerLetterContent, setOfferLetterContent] = useState("");

  const handleCandidate = (event) => {
    const selectedCandidateId = event.target.value;
    onSelectCandidate(selectedCandidateId);
  };
  console.log("candida", candidates);
  const handleGenerateOfferLetter = () => {
    // Construct the offer letter content
    const fullOfferLetter = `
       Dear ${selectedCandidate},

      We are pleased to offer you the position of ${jobPosition} at our company.

      ${offerLetterContent}

      Sincerely,
      [Your Company Name]
    `;

    console.log("offer", fullOfferLetter);
  };
  return (
    <div>
      <h2>Create Offer Letter</h2>
      <div className="flex mb-2">
        <h3 className="font-semibold text-lg mb-2 mr-2">Select Candidate: </h3>
        <select
          value={selectedCandidate}
          onChange={handleCandidate}
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
      <div>
        <label>Job Position: </label>
        <input
          type="text"
          value={jobPosition}
          onChange={(e) => setJobPosition(e.target.value)}
        />
      </div>
      <div>
        <label>Offer Letter Content: </label>
        <JoditEditor
          value={offerLetterContent}
          onChange={setOfferLetterContent}
        />
      </div>
      {/* <button onClick={handleGenerateOfferLetter}>Generate Offer Letter</button> */}
    </div>
  );
};
export default OfferLetter;
