import type { ITodosProps } from '../types.ts'
import TodoItem from './TodoItem.tsx'

function TodoList({ todos, setTodos }: ITodosProps) {
    const toggleTodoCompletion = (id: number) => {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo),
        )
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
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
