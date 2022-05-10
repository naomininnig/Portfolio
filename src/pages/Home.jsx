import React, { useContext } from "react";
import Announcment from "../componenets/Announcment";
import Intro from "../componenets/intro/Intro";
import ThemeList from "../componenets/ThemeList";
import Responsive from "../componenets/Responsive";
import Analytics from "../componenets/Analytics";
import Support from "../componenets/Support";
import Contact from "../componenets/Contact";
import Toggle from "../componenets/Toggle";
import { ThemeContext } from "../context";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#DCDCDC",
        color: darkMode && "#DCDCDC",
      }}
    >
      <Toggle theme={theme} />
      <Announcment />
      <Intro />
      <ThemeList />
      <Responsive />
      <Analytics />
      <Support />
      <Contact />
    </div>
  );
};

export default Home;
