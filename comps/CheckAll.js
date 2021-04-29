import { useContext } from "react";
import { TodoContext } from "./ContextProvider";
import Image from "next/image";
import styles from "../styles/CheckAll.module.css";
import { ThemeContext } from "./ContextProvider";

const CheckAll = () => {
  const { todosState, setTodosState } = useContext(TodoContext);
  const { themeMode } = useContext(ThemeContext);

  const handleCheck = () => {
    setTodosState(
      todosState.map((todo) => {
        return { ...todo, compleated: true };
      })
    );
  };

  return (
    <div className={themeMode === true ?styles.lightWrapper : styles.DarkWraper}>
      <input
        type="checkbox"
        id="checkAll"
        className={styles.checkInput}
        onChange={handleCheck}
      />
      <label for="checkAll" className={styles.checkmark}>
        <span></span>
      </label>
    </div>
  );
};

export default CheckAll;
