import { useContext } from "react";
import { AiFillCaretUp } from "react-icons/ai";
import { ThemeContext } from "../App";

export default function BackToTopButton({ backToTopRef }) {
  const { theme } = useContext(ThemeContext);
  return (
    <AiFillCaretUp
      size={25}
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black "
      } border-none fixed rounded-[50%] right-[8%] bottom-[8%] hover:cursor-pointer lg:right-[3%]`}
      onClick={() => {
        if (backToTopRef.current) {
          backToTopRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }}
    />
  );
}
