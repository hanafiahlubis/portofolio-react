import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { pages } from "../main";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center w-full sticky z-30 top-0 py-4 bg-white shadow-sm shadow-black lg:flex-col lg:justify-start lg:w-[72%]">
        <NavLink
          to={pages[0].path}
          className="hidden w-full  h-[62%] items-center lg:flex "
        >
          <img
            src="/Ali Hanafiah.jpeg"
            alt="sasasa"
            className="rounded-[50%] w-32 h-32 m-auto"
          />
        </NavLink>

        <Link to="/" className="logo p-2 lg:hidden ">
          <h1 className="text-xl ">Ali Hanafiah</h1>
        </Link>
        <nav
          className={`${
            openMenu === true ? "hidden" : "flex"
          } items-center p-2 lg:w-full lg:h-[72%] lg:flex-col lg:justify-around lg:pl-20 lg:items-start `}
        >
          {pages.map((e, i) => {
            return (
              <NavLink key={i} to={e.path} className="hidden lg:inline">
                {e.title}
              </NavLink>
            );
          })}
          <AiOutlineMenu
            className="lg:hidden"
            onClick={() => {
              setOpenMenu(true);
            }}
          />
        </nav>
      </header>
      <button
        onClick={() => setOpenMenu(false)}
        className={`${
          openMenu ? "block" : "hidden"
        } w-screen sm:w-full h-full absolute left-0 top-0 z-50 warna`}
      >
        <div
          className={`${
            openMenu ? "slide-in" : "slide-out"
          } flex flex-col  bg-black text-teal-600 w-3/4 h-full top-0 z-20 absolute left-0  `}
        >
          <div className="flex  justify-center items-center">
            <NavLink to={pages[0].path} className="w-[8.5rem]">
              <img
                src="/Ali Hanafiah.jpeg"
                alt="sasasa"
                className="rounded-[50%] w-full "
              />
            </NavLink>
          </div>
          <ul>
            {/* <li className="flex px-4 py-5"><a href="#Home">Home</a></li> */}
            {pages.map((page, i) => (
              <>
                <li key={i} className="flex ml-[20%] mt-[10%]">
                  <NavLink to={page.path}>{page.title}</NavLink>
                </li>
              </>
            ))}
          </ul>
        </div>
      </button>
    </>
  );
}
