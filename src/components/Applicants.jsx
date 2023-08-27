import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/UserSlice";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Applicants = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const data = useSelector((state) => {
    // console.log("first", state.app);
    return state.app;
  });
  const userData = useSelector((state) => state.app.users);
  console.log("userData", userData);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (data.loading) {
    return <h2>Loading...</h2>;
  }
  //Filter applicants based on search term
  const filteredUsers = data?.users?.filter((user) => {
    const fullName = `${user.FirstName} ${user.LastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });
  const handleAdd = () => {
    navigate("/CreateForm");
  };

  return (
    <div>
      <button onClick={handleAdd}>Add more</button>
      <input
        type="search"
        name="search"
        placeholder="Search by name"
        id=""
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term state
      />
      <table>
        <thead>
          <tr>
            <th className="p-4">SN</th>
            <th className="p-4 ">Name</th>

            <th className="p-4">DOB</th>
            <th className="p-4">Email</th>
            <th className="p-4">PhoneNumber</th>
            <th className="p-4">Education</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user, index) => (
            <tr key={index}>
              <td className="p-3"> {user?.Id}</td>
              <td className="p-3 text-green-700 cursor-pointer">
                <Link
                  to={{
                    pathname: `/profile/${user?.serialNumber}`,
                    state: { user: user }, // Make sure 'user' is defined and has valid data
                  }}
                >
                  {user?.FirstName} {user?.LastName}
                </Link>
              </td>

              <td className="p-3"> {user?.DOB}</td>
              <td className="p-3"> {user?.PrimaryEmail}</td>
              <td className="p-3"> {user?.PrimaryPhoneNumber}</td>
              <td className="p-3"> {user?.HighestLevelOfEducation}</td>
              <td className=" flex cursor-pointer m-0">
                <Link to={`/editUser/${user?.Id}`} className="p-3">
                  <AiFillEdit />
                </Link>
                <i className="p-3">
                  <AiFillDelete />
                </i>
              </td>
            </tr>
          ))}{" "}
        </tbody>
      </table>
    </div>
  );
};

export default Applicants;
