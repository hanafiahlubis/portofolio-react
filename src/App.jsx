import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import { createContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";
export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});
export default function App() {
  const [theme, setTheme] = useState("light");
  const backToTopRef = useRef(null);
  useEffect(
    () =>
      console.log(
        `Berhasil mengubah tema menjadi ${
          theme === "light" ? "Terang" : "Gelap"
        }`
      ),
    [theme]
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Outlet backToTopRef={backToTopRef} />
    </ThemeContext.Provider>
  );
}
