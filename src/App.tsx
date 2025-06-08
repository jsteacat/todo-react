import { useState } from 'react'
import type { ITodo } from './types.ts'
import TodoList from './components/TodoList.tsx'

function App() {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [input, setInput] = useState('')

    const addTodo = () => {
        if (input.trim()) {
            const newTodo: ITodo = { id: Date.now(), text: input, completed: false }
            setTodos([...todos, newTodo])
            setInput('')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-emerald-400">
            <div className="bg-white shadow-lg rounded-3xl p-16">
                <h1 className="text-3xl font-bold text-center-text-gray-900 mb-6">REACT TODO LIST</h1>
                <div className="mb-4 flex">
                    <input
                        value={input}
                        type="text"
                        placeholder="Add a new todo"
                        className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg" onClick={addTodo}>Add</button>
                </div>
                <TodoList todos={todos} setTodos={setTodos}/>
            </div>
        </div>
    )
}

export default App
