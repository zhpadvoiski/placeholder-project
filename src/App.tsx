import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";

function App() {
    return (
        <div className="App">
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
                    <Route path="/users/:id" element={<UserItemPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
