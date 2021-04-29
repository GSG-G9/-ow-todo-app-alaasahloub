import React, { useContext } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { ThemeContext } from "./ContextProvider";

const Header = () => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  const handleSwitchMood = () => {
    setThemeMode(!themeMode)
  }

  return (
    <div className={styles.header}>
      <h1 className={styles.todoHeader}>T O D O</h1>
        {themeMode === true ? (
          <Image src="/sun.svg" width={20} height={20}  onClick={handleSwitchMood} />
        ) : (
          <Image src="/moon.svg" width={20} height={20} onClick={handleSwitchMood}  />
        )}
    </div>
  );
};

export default Header;
