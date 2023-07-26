import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`${
        theme === "dark" ? "text-white" : "text-black"
      } text-center mb-5 pt-1 font-bold`}
    >
      &#169;Copyright Ali Hanafiah
    </footer>
  );
}
