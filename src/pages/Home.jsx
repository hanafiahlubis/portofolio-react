import { useContext } from "react";
import { ThemeContext } from "../App";
import Projects from "./Projects";
// import BackToTopButton from "../components/BackToTopButton";
import { useRef } from "react";
import BackToTopButton from "../components/BackToTopButton";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const backToTopRef = useRef(null);
  return (
    <div
      className={`${theme === "dark" ? "bg-slate-900" : "bg-white"}   w-full`}
    >
      <div
        ref={backToTopRef}
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
      <BackToTopButton backToTopRef={backToTopRef} />
    </div>
  );
}
