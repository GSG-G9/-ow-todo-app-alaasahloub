import {useContext} from 'react'
import {TodoContext} from './ContextProvider'
import DeleteTodo from './DeleteTodo'

const AllTodos = (props) => {
    const {todosState} = useContext(TodoContext)

    return (

        <div>
            {todosState.map(todo => (
                <div key={todo.id}>
                    {todo.todoName}
                    <DeleteTodo todoId={todo.id}/>
                </div>
            ))}
        </div>
    )
}

export default AllTodos
