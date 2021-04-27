import { createContext ,useState} from "react";
import { arrayOf, element } from "prop-types";

const todoS = [
  { id: 1, todoName: "sleeping", compleated: false },
  { id: 2, todoName: "eating", compleated: false },
  { id: 3, todoName: "walking", compleated: false },
];

export const TodoContext = createContext();

const ContextProvider = ({ children }) => {
  const [todosState, setTodosState] = useState(todoS)
  return <TodoContext.Provider value={{todosState, setTodosState}}>{children}</TodoContext.Provider>;
};

ContextProvider.propTypes = {
  children: arrayOf(element).isRequired,
};

export default ContextProvider;
