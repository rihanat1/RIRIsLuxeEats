import React from "react";
import { NavLink } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa";
import AllPaths from "../routes/AllPaths";

const Header = () => {
  const navItems = [
    { label: "Menu", path: AllPaths.menu },
    { label: "Our Story", path: AllPaths.home },
    { label: "Contact", path: AllPaths.contact },
  ];

  const linkClass = ({ isActive }) =>
    `font-light cursor-pointer pb-1 transition-all duration-300 border-b-2 ${
      isActive
        ? "text-[#9D4300] border-[#9D4300]"
        : "text-[#555F6F] border-transparent hover:text-[#9D4300]"
    }`;

  return (
    <div className="flex justify-center h-20 bg-white/80 shadow-sm z-50 backdrop-blur-sm fixed top-0 right-0 left-0">
      <div className="flex justify-between items-center w-[95%] m-auto xl:w-[85%]">
        <div className="flex items-center space-x-2">
          <GiKnifeFork className="text-[#9D4300] text-[30px]" />
          <p className="text-[#9D4300] font-bold text-[25px]">
            RIRI's LuxeEats
          </p>
        </div>

        <ul className="hidden md:flex gap-6 md:gap-8 items-center lg:ml-[-1.5rem]">
          {navItems.map((item) => (
            <li className="text-[#555F6F] text-[16px] font-light" key={item.label}>
              <NavLink to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/cart">
          <div className="flex items-center gap-2 rounded-xl text-[14px] font-bold bg-[#9D4300] text-white px-3 py-1 hover:bg-[#7a3500] transition">
            <FaOpencart />
            <span>Cart (0)</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;