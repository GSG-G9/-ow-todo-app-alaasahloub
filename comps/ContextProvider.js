import { createContext ,useState} from "react";
import { arrayOf, element } from "prop-types";
import { uuid } from 'uuidv4';

const todoS = [
  { id: uuid(), todoName: "Compleate online JavaScript course", compleated: false },
  { id: uuid(), todoName: "Jog around the park 3x", compleated: false },
  { id: uuid(), todoName: "10 minutes meditation", compleated: false },
  { id: uuid(), todoName: "Read for 1 hour", compleated: true },
  { id: uuid(), todoName: "Pick up groceries", compleated: true },
  { id: uuid(), todoName: "Complete Todo App on Frontend Mentor", compleated: true },
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
