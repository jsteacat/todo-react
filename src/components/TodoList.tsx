import type { ITodoBasic, ITodosProps } from '../types.ts'
import TodoItem from './TodoItem.tsx'

function TodoList({ todos, setTodos }: ITodosProps) {
    function toggleTodoCompletion(id: number) {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo),
        )
    }

    function deleteTodo(id: number) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    function updateSublist(id: number, sublist: ITodoBasic[]) {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, subList: sublist } : todo),
        )
    }

    return (
        <ul className="space-y-2">
            {
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        updateSubList={(sublist: ITodoBasic[]) => updateSublist(todo.id, sublist)}
                        onToggleComplete={() => toggleTodoCompletion(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                ))
            }
        </ul>
    )
}

export default TodoList
