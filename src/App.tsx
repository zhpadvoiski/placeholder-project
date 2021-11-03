import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser, ITodo } from "./types/types";
import List from "./components/List";
import axios from "axios";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";

const usersURL = "https://jsonplaceholder.typicode.com/users";
const todoURL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

function App() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        loadUsers();
        loadTodoes();
    }, []);

    async function loadUsers() {
        try {
            const resp = await axios.get<IUser[]>(usersURL);
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function loadTodoes() {
        try {
            const resp = await axios.get<ITodo[]>(todoURL);
            setTodos(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    // const users: IUser[] = [
    //     {
    //         id: 1,
    //         name: "Eugene",
    //         email: "zh.padvoiski@gmail.com",
    //         address: { street: "Mira 6", city: "Zhodishki", zipcode: "60061" },
    //     },
    //     {
    //         id: 2,
    //         name: "Siarhei",
    //         email: "zh.padvois@gmail.com",
    //         address: { street: "Mira 5", city: "Zhodishki", zipcode: "60061" },
    //     },
    // ];
    return (
        <div className="App">
            {/* <Card width="200px" height="200px">
                <button>Just a button</button>
            </Card> */}
            <Card
                width="200px"
                height="200px"
                variant={CardVariant.Primary}
                onClick={(num) => console.log(num)}
            >
                <div>text here</div>
            </Card>
            <List
                items={users}
                renderItem={(user: IUser) => (
                    <UserItem key={user.id} user={user} />
                )}
            />
            <List
                items={todos}
                renderItem={(todo: ITodo) => (
                    <TodoItem todo={todo} key={todo.id} />
                )}
            />
        </div>
    );
}

export default App;
