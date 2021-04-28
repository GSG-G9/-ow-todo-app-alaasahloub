import { useContext } from "react";
import { TodoContext } from "./ContextProvider";

const CheckAll = () => {
    const { todosState, setTodosState } = useContext(TodoContext);
    
    const handleCheck = () => {
        setTodosState(
            todosState.map((todo) => {
                return  { ...todo, compleated: true }
            })
        )
    }

    return (
        <input type="checkbox" onChange={handleCheck} />
    )
}

export default CheckAll