import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserSlice, { addShortListedUser, getData } from "../features/UserSlice";
import "./Profile.css";

import boy from "../Assests/129-1290805_person-head-and-shoulders-silhouette-hd-png-download.png";

import { toast } from "react-toastify";
const Profile = () => {
  const { serialNumber } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.app.users);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const currentUser = users.find(
    (user) => user.serialNumber === Number(serialNumber)
  );
  const handleClick = () => {
    if (!users[currentUser.id].shortListed) {
      dispatch(addShortListedUser(currentUser));
      toast("Candidate shortlisted sucessfully.", { type: "success" });
    }
    if (users[currentUser.id].shortListed) {
      return toast("Candidate already shortlisted", { type: "error" });
    }
  };
  // console.log("currentUsers:", currentUser);
  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ProfileDetails  w-full p-12">
      <h1 className="text-2xl font-semibold mb-8">Profile Details</h1>
      <div className=" flex justify-evenly  ">
        <div className="image  w-[16%] h-[10%]  rounded-lg ">
          <img src={boy} alt="img" className="mb-2" />

          <h1 className="flex  font-semibold underline  ">
            Cv url:
            <p className="font-normal ml-3 cursor-pointer">
              {" "}
              {currentUser.CVUrl}
            </p>
          </h1>
          <p>Referred By: {currentUser.ReferredBy}</p>
        </div>
        <div className="details ">
          <div className="personal mb-4">
            <h1 className="text-xl font-semibold underline mb-2">
              Personal Information
            </h1>
            <h2 className="font-semibold flex ">
              Fisrstname:
              <p className="font-normal ml-3">{currentUser.FirstName}</p>
            </h2>
            <h2 className="font-semibold flex ">
              Lastname:
              <p className="font-normal ml-3">{currentUser.LastName}</p>
            </h2>
            <h2 className="font-semibold flex ">
              Date Of Birth:
              <p className="font-normal ml-3">{currentUser.DOB}</p>
            </h2>
            <h2 className="font-semibold flex ">
              Age:
              <p className="font-normal ml-3">{currentUser.DOB}</p>
            </h2>
          </div>
          <div className="contact mb-4">
            <h1 className="text-xl font-semibold underline mb-2">
              Contact Information
            </h1>
            <h2 className="font-semibold flex ">
              Email:
              <p className="font-normal ml-3">{currentUser.PrimaryEmail}</p>
            </h2>
            <h2 className="font-semibold flex ">
              Phone Number:
              <p className="font-normal ml-3">
                {currentUser.PrimaryPhoneNumber}
              </p>
            </h2>
          </div>
          <div className="acaedemic mb-4">
            <h1 className="text-xl font-semibold underline mb-2">
              Acaedemic Information
            </h1>
            <h2 className="font-semibold flex ">
              Highest Level of Education:
              <p className="font-normal ml-3">
                {currentUser.HighestLevelOfEducation}
              </p>
            </h2>

            <h2 className="font-semibold flex ">
              Graduated On:
              <p className="font-normal ml-3">{currentUser.GraduatedOn}</p>
            </h2>
          </div>

          <div className="Experience">
            <h1 className="text-xl font-semibold underline mb-2">
              Experiece Information
            </h1>
            <h2 className="font-semibold flex ">
              Experience:
              <p className="font-normal ml-3">
                {currentUser.ExperienceInMonthsWithCompanyName}
              </p>
            </h2>
          </div>
          <button
            className={` p-4 text-white rounded-3xl w-[150px] mt-4 ${
              users[currentUser.id].shortListed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500"
            }`}
            onClick={handleClick}
          >
            Shortlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
