import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { pages } from "../main";
import MediaSosial from "./MediaSosial";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center w-full sticky z-30 top-0 py-4   bg-slate-700  shadow-sm shadow-black lg:flex-col lg:justify-start lg:w-[25%]">
        <div className="hidden w-full  h-[39%] items-center lg:flex bg-none">
          <img
            src="/Ali Hanafiah.jpeg"
            alt="sasasa"
            className="rounded-[50%] w-32 h-32 m-auto"
          />
        </div>

        <Link to="/" className="logo p-2 lg:hidden ">
          <h1 className="text-white underline">Ali Hanafiah </h1>
        </Link>
        <nav
          className={`${
            openMenu === true ? "hidden" : "flex"
          } items-center p-2 lg:w-full lg:h-[35%] lg:flex-col lg:justify-around lg:pl-20 lg:items-start `}
        >
          {pages.map((e, i) => {
            return (
              <NavLink
                key={i}
                to={e.path}
                className="hidden lg:inline text-white no-underline"
              >
                {e.title}
              </NavLink>
            );
          })}
          <a
            href="mailto:hanafiaha308@gmail.com"
            to="email"
            className="no-underline text-white text-base hidden lg:flex"
          >
            Contact
          </a>
          <AiOutlineMenu
            className="lg:hidden hover:cursor-pointer text-white"
            onClick={() => {
              setOpenMenu(true);
            }}
          />
        </nav>
        <div className="hidden lg:flex justify-evenly absolute bottom-0 w-full pb-8 ">
          <MediaSosial />
        </div>
      </header>
      <div
        onClick={() => setOpenMenu(false)}
        className={`${
          openMenu ? "block" : "hidden"
        } w-screen sm:w-full  fixed h-screen left-0 top-0 z-50 warna overflow-y-hidden`}
      >
        <div
          className={`${
            openMenu ? "slide-in" : "slide-out"
          } flex flex-col  bg-slate-700   w-[17rem] h-full top-0 z-20 absolute left-0  `}
        >
          <div className="flex  justify-center items-center">
            <div className="w-[8.5rem] bg-transparent pt-8">
              <img
                src="/Ali Hanafiah.jpeg"
                alt="sasasa"
                className="rounded-[50%] w-full h-36"
              />
            </div>
          </div>
          <ul>
            {/* <li className="flex px-4 py-5"><a href="#Home">Home</a></li> */}
            {pages.map((page, i) => (
              <>
                <li key={i} className="flex ml-[10%] mt-[10%]">
                  <NavLink
                    to={page.path}
                    className="no-underline text-white text-base"
                  >
                    {page.title}
                  </NavLink>
                </li>
              </>
            ))}
            <li className="flex ml-[10%] mt-[10%]">
              <a
                href="mailto:hanafiaha308@gmail.com"
                to="email"
                className="no-underline text-white text-base"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className=" flex lg:hidden justify-evenly absolute bottom-0 w-full pb-8 ">
            <MediaSosial />
          </div>
        </div>
      </div>
    </>
  );
}
