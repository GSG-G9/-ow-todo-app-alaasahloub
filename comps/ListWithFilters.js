import { useContext,useState } from "react";
import TodosList from "./TodosList";
import ClearCompleted from "../comps/ClearCompleted";
import TodosLeft from "../comps/TodosLeft";
import styles from "../styles/ListWithFilters.module.css";
import { ThemeContext } from "./ContextProvider";

const ListWithFilters = () => {
  const { themeMode } = useContext(ThemeContext);
  const [filterButtonName, setFilterButtonName] = useState("All");

  return (
    <div className={styles.todosWithFilterContainer}>
      <TodosList filterType={filterButtonName} />
      <div className={themeMode===true ? styles.lightFilterContainer : styles.darkFilterContainer}>
        <TodosLeft />
        <div className={styles.filters}>
          <button onClick={() => setFilterButtonName("All")} className={styles.filterBtn}>All</button>
          <button onClick={() => setFilterButtonName("Active")} className={styles.filterBtn}>Active</button>
          <button onClick={() => setFilterButtonName("Completed")} className={styles.filterBtn}>
            Completed
          </button>
        </div>
        <ClearCompleted />
      </div>
    </div>
  );
};

export default ListWithFilters;
