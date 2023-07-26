import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import { createContext } from "react";
export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});
export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Outlet />
    </ThemeContext.Provider>
  );
}
