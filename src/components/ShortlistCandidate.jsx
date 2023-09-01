import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getData } from "../features/UserSlice";
import OfferLetter from "./OfferLetter";
import { useState } from "react";

const ShortlistCandidate = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app.shortListedUser);
  console.log("Data in ShortlistCandidate:", data);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const navigate = useNavigate();
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  if (data.loading) {
    return <h2>Loading...</h2>;
  }

  const handleSchedule = () => {
    navigate("/schedule", { state: { candidates: data } });
  };
  const handleOffer = (candidate) => {
    setSelectedCandidate(candidate.FirstName);
    navigate("/offer");
  };
  console.log("first", selectedCandidate);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="p-4">SN</th>
            <th className="p-4 ">Name</th>

            <th className="p-4">Email</th>
            <th className="p-4">Contact</th>
            <th className="p-4">Education</th>
            <th className="p-4">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr className="bg-red-100 text-sm" key={user.id}>
              <td className="p-3">{user.Id}</td>
              <td className="p-3 text-green-700 cursor-pointer">
                <Link
                  to={{
                    pathname: `/profile/${user?.Id}`,
                    state: { user: user }, // Make sure 'user' is defined and has valid data
                  }}
                >
                  {user.FirstName} {user.LastName}
                </Link>
              </td>

              <td className="p-3"> {user.PrimaryEmail}</td>
              <td className="p-3"> {user.PrimaryPhoneNumber}</td>
              <td className="p-3"> {user.HighestLevelOfEducation}</td>
              <td
                onClick={handleSchedule}
                className="p-2 bg-[#F53139] text-white cursor-pointer"
              >
                schedule
              </td>
              <td className="p-2 bg-[#F53139] text-white cursor-pointer">
                <input type="checkbox" />
                Interviewed
              </td>
              <td
                onClick={handleOffer}
                className="p-2 bg-[#F53139] text-white cursor-pointer"
              >
                OfferLetter
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCandidate && (
        <OfferLetter
          candidates={data}
          selectedCandidate={selectedCandidate}
          onSelectCandidate={(candidateId) => setSelectedCandidate(candidateId)}
        />
      )}
    </div>
  );
};

export default ShortlistCandidate;
