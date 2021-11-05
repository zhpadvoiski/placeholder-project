import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { ITodo } from "../types/types";

interface PageParams {
    id: string;
}

const todoURL = "https://jsonplaceholder.typicode.com/todos/";

const TodoItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const params = useParams();

    useEffect(() => {
        fetchTodo();
    });

    async function fetchTodo() {
        try {
            const resp = await axios.get<ITodo>(todoURL + params.id);
            setTodo(resp.data);
        } catch (e) {
            alert(e);
        }
    }
    return (
        todo && (
            <div>
                <input type="checkbox" checked={todo?.completed} />
                <h1>{todo?.title}</h1>
            </div>
        )
    );
};

export default TodoItemPage;
