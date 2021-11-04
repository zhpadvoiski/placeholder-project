import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser, ITodo } from "./types/types";
import List from "./components/List";
import axios from "axios";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";

function App() {
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
            <EventsExample />
            <Router>
                <Routes>
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/todos" element={<TodosPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
