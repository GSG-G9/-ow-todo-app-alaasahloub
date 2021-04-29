import { useContext } from "react";
import { TodoContext } from "./ContextProvider";
import Image from "next/image";
import styles from "../styles/CheckAll.module.css";
import { ThemeContext } from "./ContextProvider";

const Checkbox = (props) => {
  const { todosState, setTodosState } = useContext(TodoContext);
  const { themeMode } = useContext(ThemeContext);
  const { isChecked, todoId } = props;

  const handleChange = (todoId) => {
    setTodosState(
      todosState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, compleated: !todo.compleated };
        } else {
          return todo;
        }
      })
    );
  };
  // return {
  //   ...(isChecked === true ? (
  //     <input type="checkbox" checked onChange={() => handleChange(todoId)} />
  //   ) : (
  //     <input type="checkbox" onChange={() => handleChange(todoId)} />
  //   )),
  // };
  return {
    ...(isChecked === true ? (
      <div
        className={themeMode === true ? styles.lightWrapper : styles.DarkWraper}
      >
        <input
          type="checkbox"
          checked
          id={todoId}
          className={styles.checkInput}
          onChange={() => handleChange(todoId)}
        />
        <label for={todoId} className={styles.checkmark}>
          <span></span>
        </label>
      </div>
    ) : (
      <div
        className={themeMode === true ? styles.lightWrapper : styles.DarkWraper}
      >
        <input
          type="checkbox"
          id={todoId}
          className={styles.checkInput}
          onChange={() => handleChange(todoId)}
        />
        <label for={todoId} className={styles.checkmark}>
          <span></span>
        </label>
      </div>
    )),
  };
};

export default Checkbox;
