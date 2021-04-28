import { useContext } from "react";
import { TodoContext } from "./ContextProvider";

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
  return {
    ...(isChecked === true ? (
      <input type="checkbox" checked onChange={() => handleChange(todoId)} />
    ) : (
      <input type="checkbox" onChange={() => handleChange(todoId)} />
    )),
  };
};

export default Checkbox;