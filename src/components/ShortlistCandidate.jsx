import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/UserSlice";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ShortlistCandidate = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app.shortListedUser);
  console.log("candidta", data);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const navigate = useNavigate();

  if (data.loading) {
    return <h2>Loading...</h2>;
  }

  const handleSchedule = () => {
    navigate("/calendar");
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="p-4">SN</th>
            <th className="p-4 ">Name</th>
            <th className="p-4">DOB</th>
            <th className="p-4">Email</th>
            <th className="p-4">PhoneNumber</th>
            <th className="p-4">Education</th>
            <th className="p-4">View</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr className="bg-red-200" key={user.id}>
              <td className="p-3">{user.serialNumber}</td>
              <td className="p-3 text-green-700 cursor-pointer">
                <Link
                  to={{
                    pathname: `/profile/${user.serialNumber}`,
                    state: { user: user }, // Make sure 'user' is defined and has valid data
                  }}
                >
                  {user.FirstName} {user.LastName}
                </Link>
              </td>

              <td className="p-3"> {user.DOB}</td>
              <td className="p-3"> {user.PrimaryEmail}</td>
              <td className="p-3"> {user.PrimaryPhoneNumber}</td>
              <td className="p-3"> {user.HighestLevelOfEducation}</td>
              <td
                onClick={handleSchedule}
                className="p-3 bg-blue-400 text-white cursor-pointer"
              >
                schedule
              </td>
              <td className=" flex cursor-pointer m-0">
                <i className="p-3">
                  <AiFillEdit />
                </i>
                <i className="p-3">
                  <AiFillDelete />
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShortlistCandidate;
