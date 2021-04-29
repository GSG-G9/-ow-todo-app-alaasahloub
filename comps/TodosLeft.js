import { useContext } from "react";
import { TodoContext } from "./ContextProvider";

const TodosLeft = () => {
  const { todosState } = useContext(TodoContext);
  const leftNum = todosState.filter((todo) => todo.compleated === false).length;

  return <p>{leftNum} items left</p>;
};

export default TodosLeft;
