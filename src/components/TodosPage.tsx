import React, { useState, useEffect } from "react";
import List from "./List";
import { ITodo } from "../types/types";
import TodoItem from "./TodoItem";
import axios from "axios";

const todoURL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        loadTodoes();
    }, []);

    async function loadTodoes() {
        try {
            const resp = await axios.get<ITodo[]>(todoURL);
            setTodos(resp.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
        />
    );
};

export default TodosPage;
