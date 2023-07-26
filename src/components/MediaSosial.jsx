import { BsGithub } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function MediaSosial() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <NavLink
        to="https://github.com/hanafiahlubis"
        className={`${theme === "dark" ? "text-black" : "text-white"}`}
      >
        <BsGithub className="text-2xl " />
      </NavLink>
      <NavLink
        to="https://www.linkedin.com/in/ali-hanafiah-7067a8263/"
        className={`${theme === "dark" ? "text-black" : "text-white"}`}
      >
        <BiLogoLinkedinSquare className="text-2xl " />
      </NavLink>
      <NavLink
        to="https://twitter.com/Ali_Hanafiah1"
        className={`${theme === "dark" ? "text-black" : "text-white"}`}
      >
        <FaTwitter className="text-2xl " />
      </NavLink>
    </>
  );
}
