import { BsGithub } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function MediaSosial() {
  return (
    <>
      <NavLink to="https://github.com/hanafiahlubis" className="text-black">
        <BsGithub className="text-2xl " />
      </NavLink>
      <NavLink
        to="https://www.linkedin.com/in/ali-hanafiah-7067a8263/"
        className="text-black"
      >
        <BiLogoLinkedinSquare className="text-2xl " />
      </NavLink>
      <NavLink to="https://twitter.com/Ali_Hanafiah1" className="text-black">
        <FaTwitter className="text-2xl " />
      </NavLink>
    </>
  );
}
