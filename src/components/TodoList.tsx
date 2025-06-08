import type { ITodosProps } from '../types.ts'
import TodoItem from './TodoItem.tsx'

function TodoList({ todos, setTodos }: ITodosProps) {
    return (
        <ul className="space-y-2">
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
                ))
            }
        </ul>
    )
}

export default TodoList
