import { useContext, useState } from "react";
import { TodoContext } from "./ContextProvider";
import DeleteTodo from "./DeleteTodo";

const TodosList = (props) => {
  const { filterType } = props;
  const { todosState } = useContext(TodoContext);

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
    <div>
      {result.map((todo) => (
        <div key={todo.id}>
          {todo.todoName}
          <DeleteTodo todoId={todo.id} />
        </div>
      ))}
    </div>
  );
};

export default TodosList;
