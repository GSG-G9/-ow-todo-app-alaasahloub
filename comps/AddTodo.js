import { useContext } from "react";
import { TodoContext } from "./ContextProvider";

const AddTodo = () => {
  const { todosState, setTodosState } = useContext(TodoContext);
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
    <div>
      <input type="text" onBlur={handleAdd} />
    </div>
  );
};

export default AddTodo;
