import React from "react";
import { BsFillPersonFill, BsSignpostSplit } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";
import { MdDashboard, MdOutlineAssessment } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const user = useSelector((store) => store.app);
  return (
    <>
      <div className="flex flex-col items-center bg-slate-100 p-6 h-screen w-[280px] ">
        <h1 className="font-bold text-4xl"> Amnil </h1>
        <h1 className="font-bold text-3xl mb-1">Technologies</h1>
        <hr className="bg-black w-[100%] h-1 mb-8" />
        <ul className="menu">
          <li className="flex items-center mb-6">
            <i className="mr-4">
              <MdDashboard />
            </i>
            <Link to="/" className="text-lg font-semibold">
              Dashboard
            </Link>
          </li>
          <li className="flex items-center mb-6">
            <i className="mr-4">
              <BsFillPersonFill />
            </i>
            <Link to="/applicants" className="text-lg font-semibold">
              Applicants
            </Link>
          </li>
          <li className="flex items-center mb-6">
            <i className="mr-4">
              <BsFillPersonFill />
            </i>
            <Link to="/shortlisted" className="text-lg font-semibold">
              Shortlisted Candidates
            </Link>
            <p className="bg-blue-400 w-10 h-10 rounded-full flex justify-center items-center text-white -translate-x-6">
              {user.shortListedUser.length}
            </p>
          </li>
          <li className="flex items-center mb-6">
            <i className="mr-4">
              <FaPeopleArrows />
            </i>
            <Link to="/schedule" className="text-lg font-semibold">
              Interviews
            </Link>
          </li>
          <li className="flex items-center mb-6">
            <i className="mr-4">
              <FaPeopleArrows />
            </i>
            <Link to="/interviewer" className="text-lg font-semibold">
              Interviewers
            </Link>
          </li>

          <li className="flex items-center  mb-6">
            <i className="mr-4">
              <BsSignpostSplit />
            </i>
            <Link to="/jobpostings" className="text-lg font-semibold">
              Job Postings
            </Link>
          </li>
          <li className="flex items-center mb-6">
            <i className="mr-4">
              <MdOutlineAssessment />
            </i>
            <Link to="/assessments" className="text-lg font-semibold">
              Assessments
            </Link>
          </li>
          <li className="flex items-center mb-6">
            <i className="mr-4">
              <SlEnvolopeLetter />
            </i>
            <Link to="offer" className="text-lg font-semibold">
              Offer Letter
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
