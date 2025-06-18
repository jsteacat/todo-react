import * as React from 'react'

export interface ITodoBasic {
    id: number;
    text: string;
    completed: boolean;
}

export interface ITodoExtended extends ITodoBasic {
    subList: ITodoBasic[];
}

export interface ITodosProps {
    todos: ITodoExtended[];
    setTodos: React.Dispatch<React.SetStateAction<ITodoExtended[]>>;
}

export interface ITodoItemProps {
    todo: ITodoExtended;
    onToggleComplete: () => void;
    onDelete: () => void;
    updateSubList: (p: ITodoBasic[]) => void;
}

export interface ISubTodoItemProps {
    todo: ITodoBasic;
    onToggleComplete: () => void;
    onDelete: () => void;
}
