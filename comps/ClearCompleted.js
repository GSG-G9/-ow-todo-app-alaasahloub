import { useContext } from "react";
import { TodoContext } from "./ContextProvider";
import styles from "../styles/ListWithFilters.module.css";

const ClearCompleted = () => {
  const { todosState, setTodosState } = useContext(TodoContext);

  const handleClear = () => {
    const active = todosState.filter((todo) => todo.compleated !== true);
    setTodosState(active)
  };
  return <button onClick={handleClear} className={styles.filterBtn}>Clear Component</button>;
};

export default ClearCompleted;
