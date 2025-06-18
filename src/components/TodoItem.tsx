import { useState } from 'react'
import SubTodoItem from './SubTodoItem.tsx'
import type { ITodoItemProps } from '../types.ts'
import DeleteIcon from '../assets/icons/delete.svg'
import PlusIcon from '../assets/icons/plus.svg'

function TodoItem({ todo, onToggleComplete, onDelete, updateSubList }: ITodoItemProps) {
    const [input, setInput] = useState('')

    function addSubTodo() {
        if (input.trim()) {
            updateSubList([...todo.subList, { id: Date.now(), text: input, completed: false }])
            setInput('')
        }
    }

    function toggleSubTodoCompletion(id: number) {
        updateSubList(todo.subList.map((subTodo) => subTodo.id === id ? {
            ...subTodo,
            completed: !subTodo.completed,
        } : subTodo))
    }

    function deleteSubTodo(id: number) {
        updateSubList(todo.subList.filter((subTodo) => subTodo.id !== id))
    }

    return (
        <li className="p-3 rounded-lg bg-slate-100 border border-gray-200">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="mr-2 h-5 w-5 text-blue-600"
                    checked={todo.completed}
                    onChange={onToggleComplete}
                />
                <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {todo.text}
                </span>
                <button
                    className="ml-2 border-none cursor-pointer"
                    onClick={onDelete}
                >
                    <img src={DeleteIcon} style={{ width: 36 }} alt="Delete"/>
                </button>
            </div>
            <div className="flex items-center mt-2">
                <input
                    value={input}
                    type="text"
                    placeholder="Add a new sub task"
                    className="flex-grow px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="ml-2 border-none cursor-pointer" onClick={addSubTodo}>
                    <img src={PlusIcon} style={{ width: 36 }} alt="Add sub task"/>
                </button>
            </div>
            <ul className="space-y-2 mt-2 pl-3 -mr-1">
                {
                    todo.subList.map((subTodo) => (
                        <SubTodoItem
                            key={subTodo.id}
                            todo={subTodo}
                            onToggleComplete={() => toggleSubTodoCompletion(subTodo.id)}
                            onDelete={() => deleteSubTodo(subTodo.id)}
                        />
                    ))
                }
            </ul>
        </li>
    )
}

export default TodoItem
