import * as React from 'react'

export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
}

export interface ITodosProps {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export interface ITodoItemProps extends ITodosProps {
    todo: ITodo;
}
