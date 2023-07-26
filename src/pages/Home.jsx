import { useContext } from "react";
import { ThemeContext } from "../App";
import Projects from "./Projects";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${theme === "dark" ? "bg-slate-900" : "bg-white"}   w-full`}
    >
      {/* <div className="absolute right-0">
        <button onClick={() => setShowThema(!showThema)}>Thema</button>
        {showThema && (
          <section
            className="hover:cursor-pointer"
            onClick={(e) => setTheme(e.target.value)}
          >
            <option value="light" className=" hover:bg-slate-900">
              light
            </option>
            <option value="dark" className=" hover:bg-slate-900">
              Drak
            </option>
          </section>
        )}
      </div> */}
      <div
        id="Home"
        className={`${
          theme === "dark" ? "text-white" : ""
        } p-6 flex flex-col gap-2 `}
      >
        <p className="">Hey there 👋</p>
        <h1>I{"'"}m Ali Hanafiah</h1>
        <h3 className="md:text-xl">Junior FrontEnd And BackEnd Developer</h3>
        <p className="text-[12px] sm:text-sm md:text-base">
          I am someone who is very interested in the IT world. Therefore, I very
          happy with learning and understanding programming languages.
          Especially JavaScript, NodeJs, and PHP. PHP.
        </p>
      </div>
      <Projects />
    </div>
  );
}
