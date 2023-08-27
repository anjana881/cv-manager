import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { Outlet } from "react-router-dom";
import "./dashboard.css";

import logo from "../Assests/logo.PNG";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <div className="Navvar w-[100%] h-fit bg-slate-100 p-4 pl-20 pr-20 flex justify-between items-center">
        <div className="flex">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <div className="flex flex-col">
            <h1>AMNIL</h1>
            <h4>Technologies</h4>
          </div>
        </div>
        <div className="searchbar flex items-center">
          <input
            type="search"
            name="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Applicants..."
            className="rounded-lg mr-1 "
          />
          <i className="text-2xl mr-8">
            <AiOutlineSearch />
          </i>
          <div className="notification">
            <i>
              <GrNotification />
            </i>
          </div>
        </div>
      </div>
      <div className="below-content bg-zinc-50">
        <div className="left-sidebar">
          <Sidebar />
        </div>

        <div className="content">
          <Outlet searchTerm={searchTerm} />
          {/* Pass searchTerm to Outlet */}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
