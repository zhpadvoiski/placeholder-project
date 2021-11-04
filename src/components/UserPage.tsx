import React, { useState, useEffect } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";

const usersURL = "https://jsonplaceholder.typicode.com/users";

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        loadUsers();
    }, []);

    async function loadUsers() {
        try {
            const resp = await axios.get<IUser[]>(usersURL);
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <List
            items={users}
            renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
        />
    );
};

export default UsersPage;
