import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa";
import AllPaths from "../routes/AllPaths";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const navItems = [
    {label:"Home", path:AllPaths.home},
    { label: "Menu", path: AllPaths.menu },
    { label: "Our Story", path: AllPaths.ourStory },
    { label: "Contact", path: AllPaths.contact },
    
  ]
  
  

  const [subMenu, setSubMenu] = useState(false);
  function handleSubMenu() {
    setSubMenu(!subMenu);
  }

  const linkClass = ({ isActive }) =>
    `font-light cursor-pointer pb-1 transition-all duration-300 border-b-2 ${
      isActive
        ? "text-[#F2CA51] border-[#F2CA51]"
        : "text-[#555F6F] border-transparent hover:text-[#F2CA51]"
    }`

  return (
    <div className="flex justify-center h-20 bg-black/50 border-b border-[#4D4635] shadow-sm z-50 backdrop-blur-sm fixed top-0 right-0 left-0">
      <div className="flex justify-between items-center w-[95%] m-auto md:flex md:justify-between md:w-[85%]">
        <div className="flex items-center space-x-2 z-50">
          <GiKnifeFork className="text-[#F2CA51] text-[30px]" />
          <p className="z-50 text-[#F2CA51] font-bold text-[25px]">
            RIRI's LuxeEats
          </p>
        </div>

        <ul
          className={`
        fixed flex flex-col justify-center items-center top-12 
        bg-black/80 shadow-sm z-30 backdrop-blur-sm left-0 right-0  pb-4  md:static md:flex-row md:gap-8 md:items-center md:h-fit md:w-[39%] md:justify-center md:pb-0 md:bg-transparent md:shadow-none md:backdrop-blur-none lg:w-[30%]
    ${
      subMenu
        ? "max-h-[500px] opacity-100 transition-all duration-300 ease-in-out"
        : "max-h-0 opacity-0 pointer-events-none md:max-h-none md:opacity-100 md:pointer-events-auto md:transition-none"
    }
  `}
        >
          {navItems.map((item) => (
            <li
              className={`
                text-[#555F6F] border-b-2 p-4 font-semibold border-[#F2CA51] 
                w-full text-center text-[16px] list-none
                md:border-none md:w-auto md:p-0 md:font-light
              `}
              key={item.label}
            >
              <NavLink onClick={() => setSubMenu(false)}  to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="z-50 flex gap-4 items-center justify-center">
          <NavLink to="/cart">
            <div className="z-50 flex items-center gap-2 rounded-xl text-[14px] font-bold bg-[#F2CA51] text-black px-3 py-1 hover:bg-[#D4AF37] transition">
              <FaOpencart />
              <span>Cart (0)</span>
            </div>
          </NavLink>
          <div onClick={handleSubMenu} className="cursor-pointer md:hidden">
            {subMenu ? (
              <IoMdClose className="mt-[4px] z-50 text-3xl text-[#F2CA51]" />
            ) : (
              <RxHamburgerMenu className="mt-[4px] z-60 text-3xl text-[#F2CA51]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
