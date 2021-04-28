import { useContext } from "react";
import { TodoContext } from "./ContextProvider";
import Image from "next/image";
import styles from "../styles/CheckAll.module.css";

const CheckAll = () => {
  const { todosState, setTodosState } = useContext(TodoContext);

  const handleCheck = () => {
    setTodosState(
      todosState.map((todo) => {
        return { ...todo, compleated: true };
      })
    );
  };

  return (
    <div>
      <div className={styles.container}>
        <button  className={styles.checkLabel}>
          <input
            type="checkbox"
            id="checkAll"
            className={styles.checkInput}
            onChange={handleCheck}
            /> 
            <Image src="/check.svg" width={13} height={13} className={styles.checkImage} />
          {/* </input> */}
        </button>
      </div>
    </div>
  );
};

export default CheckAll;
