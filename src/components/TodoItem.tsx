import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
    todo: ITodo;
}

const UserItem: FC<TodoItemProps> = ({ todo }) => {
    return (
        <div
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
