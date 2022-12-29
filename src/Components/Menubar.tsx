import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";

interface childrenProps {
  children: JSX.Element;
}
const userRole = "admin";
const MenuBar = ({ children }: childrenProps) => {
  const [open, setOpen] = useState(true);
  const [menus, setMenus] = useState<any[]>([]);
  useEffect(() => {
    const Menus = [
      { title: "Profile", path: "/profile" },
      ["admin", "teacher"].includes(userRole) && {
        title: "Subjects",
        path: "/subjects",
      },
      ["admin", "teacher"].includes(userRole) && {
        title: "Students",
        path: "/students",
      },
      ["admin"].includes(userRole) && {
        title: "Faculties",
        path: "/faculties",
      },
      ["teacher"].includes(userRole) && {
        title: "Student Results",
        path: "/results",
      },
      ["admin"].includes(userRole) && { title: "Courses", path: "/courses" },
      ["teacher"].includes(userRole) && { title: "Exams", path: "/exam" },
      ["teacher"].includes(userRole) && {
        title: "Time Table",
        path: "/timetables",
      },
      ["teacher", "student"].includes(userRole) && {
        title: "Attendance",
        path: "/attendances",
      },
      { title: "Rise Issues", path: "/riseissues" },
      ["admin"].includes(userRole) && {
        title: "Faculty Salary",
        path: "/facultysalary",
      },
      ["admin"].includes(userRole) && {
        title: "Student Payment",
        path: "/studentpayment",
      },
      { title: "Log Out", path: "/" },
    ];
    setMenus(Menus.filter((m) => m));
    return () => {};
  }, []);

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-80" : "w-20 "
        } bg-blue-300 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${
            !open && "rotate-180"
          }`}
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
          {menus.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`link flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-500 text-sm items-center gap-x-4
           ${index === 0 && "bg-light-white"}`}
            >
              {/* <img src={`./src/assets/${item.src}.png`} /> */}
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-gray-500 text-lg`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
};
export default MenuBar;
