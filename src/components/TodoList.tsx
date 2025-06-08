import type { ITodosProps } from '../types.ts'
import TodoItem from './TodoItem.tsx'

function TodoList({ todos, setTodos }: ITodosProps) {
    const toggleTodoCompletion = (id: number) => {
        setTodos(
            todos.map((t) => t.id === id ? { ...t, completed: !t.completed } : t),
        )
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((t) => t.id !== id))
    }

    return (
        <ul className="space-y-2">
            {
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggleComplete={() => toggleTodoCompletion(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                ))
            }
        </ul>
    )
}

export default TodoList
