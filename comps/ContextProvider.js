import { createContext ,useState} from "react";
import { arrayOf, element } from "prop-types";

const todoS = [
  { id: 1, todoName: "Compleate online JavaScript course", compleated: false },
  { id: 2, todoName: "Jog around the park 3x", compleated: false },
  { id: 3, todoName: "10 minutes meditation", compleated: false },
  { id: 4, todoName: "Read for 1 hour", compleated: true },
  { id: 5, todoName: "Pick up groceries", compleated: true },
  { id: 6, todoName: "Complete Todo App on Frontend Mentor", compleated: true },
];
const theme = true;
export const TodoContext = createContext();
export const ThemeContext = createContext();

const ContextProvider = ({ children }) => {
  const [todosState, setTodosState] = useState(todoS)
  const [themeMode, setThemeMode] = useState(theme)

  return <TodoContext.Provider value={{todosState, setTodosState}}>
    <ThemeContext.Provider value={{themeMode, setThemeMode}}>
    {children}
    </ThemeContext.Provider>
    </TodoContext.Provider>;
};

ContextProvider.propTypes = {
  children: arrayOf(element).isRequired,
};

export default ContextProvider;
