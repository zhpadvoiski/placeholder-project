import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
    todo: ITodo;
    onClick: (todo: ITodo) => void;
}

const UserItem: FC<TodoItemProps> = ({ todo, onClick }) => {
    return (
        <div
            onClick={() => onClick(todo)}
            style={{
                padding: 15,
                border: "1px solid gray",
                textDecoration: todo.completed ? "line-through" : undefined,
            }}
        >
            {todo.id}. {todo.title}
        </div>
    );
};

export default UserItem;
