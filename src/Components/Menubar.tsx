import React from "react";
import { FunctionComponent, PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";
const Facultymenu: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Profile", src: "Profile", path: "/s-profile" },
    { title: "Exam", src: "Exam", path: "/exam" },
    { title: "Time Table ", src: "Timetable", path: "/s-timetable" },
    { title: "Attendance", src: "Attendance", path: "/s-attendace" },
    { title: "Rise Issue", src: "Riseissue", path: "/riseissue" },
    { title: "Student Attendence", src: "Studentattendance", path: "/studentattendace" },
    { title: "Student Marks", src: "Studentmarks", path: "/studentmarks" },
    { title: "Generate Report", src: "Generatereport", path: "/generatereport" },
    { title: "Log Out", src: "Logout", path: "/" }
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-blue-300 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
       border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/sms.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-gray-500 origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            SMS
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link
              key={index}
              to={Menu.path}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-500 text-sm items-center gap-x-4 
           ${index === 0 && "bg-light-white"} `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-gray-500 text-lg`}
              >
                {Menu.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Facultymenu;
