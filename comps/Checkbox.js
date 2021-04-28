import { useContext } from "react";
import { TodoContext } from "./ContextProvider";
import Image from "next/image";
import styles from "../styles/CheckAll.module.css";

const Checkbox = (props) => {
  const { todosState, setTodosState } = useContext(TodoContext);
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
  <div className={styles.container}>
    <button className={styles.checkLabel}>
      <input
        type="checkbox"
        checked
        onChange={() => handleChange(todoId)}
        id="checkAll"
        className={styles.checkInput}
      />
      <Image
        src="/check.svg"
        width={13}
        height={13}
        className={styles.checkImage}
      />
    </button>
  </div>
    ) : (
    <div className={styles.container}>
    <button className={styles.checkLabel}>
      <input
        type="checkbox"
        onChange={() => handleChange(todoId)}
        id="checkAll"
        className={styles.checkInput}
      />
      <Image
        src="/check.svg"
        width={13}
        height={13}
        className={styles.checkImage}
      />
    </button>
  </div>
    )),
  };
};

export default Checkbox;
