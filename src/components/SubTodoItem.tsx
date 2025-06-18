import DeleteIcon from '../assets/icons/delete.svg'
import type { ISubTodoItemProps } from '../types.ts'

function SubTodoItem({ todo, onToggleComplete, onDelete }: ISubTodoItemProps) {
    return (
        <li className="flex items-center p-2 rounded-lg bg-slate-100 border border-gray-200">
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
                <img src={DeleteIcon} style={{ width: 30 }} alt="Delete"/>
            </button>
        </li>
    )
}

export default SubTodoItem
