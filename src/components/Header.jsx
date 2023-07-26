import { useState, useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { pages } from "../main";
import MediaSosial from "./MediaSosial";
import { ThemeContext } from "../App";

export default function Header() {
  const [showThema, setShowThema] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <header
        className={`${
          theme === "dark" ? "bg-slate-700" : "bg-black"
        } flex justify-between items-center w-full sticky z-30 top-0 py-4 shadow-sm shadow-black lg:flex-col lg:justify-start lg:w-[25%]`}
      >
        <div className="hidden w-full  h-[39%] items-center lg:flex bg-none lg:h-auto">
          <img
            src="/Ali Hanafiah.jpeg"
            alt="sasasa"
            className="rounded-[50%] w-32 h-32 m-auto"
          />
        </div>

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

        <Link to="/" className="logo p-2 lg:hidden ">
          <h1 className="text-white underline text-xl ">Ali Hanafiah </h1>
        </Link>

        <div className="flex items-center w-max p-2  lg:w-12 lg:h-[10px] lg:fixed lg:right-6">
          <button
            className={`${
              theme === "dark"
                ? "bg-slate-500 text-white "
                : "bg-white lg:bg-black lg:text-white text-black"
            } py-1 px-2 rounded-2xl font-bold border-none lg:absolute lg:right-0`}
            onClick={() => setShowThema(!showThema)}
          >
            Theme
          </button>
        </div>
        <div className="hidden lg:flex justify-evenly absolute bottom-0 w-full pb-8 ">
          <MediaSosial />
        </div>
      </header>
      {showThema && (
        <section
          className={`${
            theme === "dark" ? "bg-slate-600 text-white " : "bg-slate-200"
          } hover:cursor-pointer absolute  right-4  lg:right-7 rounded-lg top-23 p-2 lg:top-11`}
          onClick={(e) => {
            setTheme(e.target.value);
            setShowThema(false);
          }}
        >
          <option
            value="light"
            className=" hover:bg-slate-900 hover:text-white"
          >
            light
          </option>
          <option value="dark" className=" hover:bg-slate-900 hover:text-white">
            Dark
          </option>
        </section>
      )}

      <div
        onClick={() => setOpenMenu(false)}
        className={`${
          openMenu ? "block" : "hidden"
        } w-screen sm:w-full  fixed h-screen left-0 top-0 z-50 warna overflow-y-hidden`}
      >
        {/* sasaa */}
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
