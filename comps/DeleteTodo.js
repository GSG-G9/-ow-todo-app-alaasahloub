import Image from "next/image";
import { useContext } from "react";
import { TodoContext } from "./ContextProvider";

const DeleteTodo = (props) => {
  const { todosState, setTodosState } = useContext(TodoContext);
  const { todoId } = props;
  
  const handleDelete = (todoId) => {
    const toUpdate = todosState.filter((todo) => todo.id !== todoId);
    setTodosState(toUpdate);
  };

  return (
    <button onClick = {()=> handleDelete(todoId)}>
      <Image src="/cross.svg" width={20} height={20} />
    </button>
  );
};

export default DeleteTodo;
