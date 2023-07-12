import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { pages } from "../main";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="bg-red-300 flex justify-between items-center w-full absolute">
        <Link to="/" className="logo p-2">
          <h1 className="text-xs">Ali Hanafiah</h1>
        </Link>
        <nav className="flex items-center p-2">
          <AiOutlineMenu
            // className={openMenu === false ? "none" : ""}
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
        } w-screen sm:w-full h-full absolute left-0 top-0 z-50`}
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
                <li key={i}>
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
