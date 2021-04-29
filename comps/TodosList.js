import { useContext } from "react";
import { TodoContext } from "./ContextProvider";
import DeleteTodo from "./DeleteTodo";
import Checkbox from "./Checkbox";
import styles from "../styles/TodosList.module.css";
import { ThemeContext } from "./ContextProvider";

const TodosList = (props) => {
  const { filterType } = props;
  const { todosState } = useContext(TodoContext);
  const { themeMode } = useContext(ThemeContext);

  let result = [];
  switch (filterType) {
    case "All":
      result = todosState;
      break;
    case "Active":
      result = todosState.filter((todo) => todo.compleated === false);
      break;
    case "Completed":
      result = todosState.filter((todo) => todo.compleated === true);
      break;
    default:
      return todosState;
  }

  return (
    // <div className={styles.todosList}>
    <div
      className={
        themeMode === true ? styles.lightTodosList : styles.darkTodosList
      }
    >
      {result.map((todo) => (
        <div key={todo.id} className={styles.todo}>
          <Checkbox isChecked={todo.compleated} todoId={todo.id} />
          <p className={styles.todoName}>
            {todo.compleated === true ? (
              <del>todo.todoName</del>
            ) : (
              todo.todoName
            )}
          </p>
          <DeleteTodo todoId={todo.id} />
        </div>
      ))}
    </div>
  );
};

export default TodosList;
