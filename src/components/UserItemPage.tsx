import React, { useState, useEffect } from "react";
import axios from "axios";
import { IUser } from "../types/types";
import { useParams } from "react-router-dom";
import SingleUser from "./SingleUser";

const baseURL = "https://jsonplaceholder.typicode.com/users/";

interface UserItemPageParams {
    id: string;
}

const UserItemPage: React.FC = () => {
    const [user, setUser] = useState<IUser | null>();
    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    async function loadUsers() {
        try {
            const resp = await axios.get<IUser>(baseURL + id);
            setUser(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <SingleUser user={user} />
        </div>
    );
};

export default UserItemPage;
