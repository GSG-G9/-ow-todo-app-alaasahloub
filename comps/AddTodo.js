import { useContext } from "react";
import { TodoContext } from "./ContextProvider";
import CheckAll from './CheckAll';
import styles from '../styles/AddTodo.module.css'
import { ThemeContext } from "./ContextProvider";

const AddTodo = () => {
  const { todosState, setTodosState } = useContext(TodoContext);
  const { themeMode } = useContext(ThemeContext);

  const statelength = todosState.length;

  const handleAdd = (e) => {
    e.preventDefault();
    if (e.target.value !== "") {
      setTodosState([
        ...todosState,
        { id: statelength + 1, todoName: e.target.value, compleated: false },
      ]);
    }
    e.target.value = ""
  };

  return (
    // <div className={styles.addTodoContainer}>
    <div className={themeMode === true ? styles.lightAddTodoContainer: styles.DarkAddTodoContainer}>
      <CheckAll />
      <input type="text" onBlur={handleAdd} className={styles.addInput}  placeholder="Create a new todo..."/>
    </div>
  );
};

export default AddTodo;
