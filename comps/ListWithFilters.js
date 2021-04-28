import { useState } from "react";
import TodosList from './TodosList'
import ClearCompleted from '../comps/ClearCompleted'
const ListWithFilters = () => {
  const [filterButtonName, setFilterButtonName] = useState('All')

  return (
    <div>
      <div>
          <TodosList filterType={filterButtonName} />
          <button onClick={() => setFilterButtonName('All')}>All</button>
          <button onClick={() => setFilterButtonName('Active')}>Active</button>
          <button onClick={() => setFilterButtonName('Completed')}>Completed</button>
          <ClearCompleted />
      </div>
    </div>
  );
};

export default ListWithFilters;
