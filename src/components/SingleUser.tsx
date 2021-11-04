import React from "react";
import { IUser } from "../types/types";
import { useNavigate } from "react-router-dom";

interface SingleUserProps {
    user?: IUser | null;
}

const SingleUser: React.FC<SingleUserProps> = ({ user }) => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/users")}>back</button>
            <h1>This is a page of a {user?.name}</h1>
            {/* <div>{user.email}</div> */}
            <div>
                {user?.address.city} {user?.address.street}{" "}
                {user?.address.zipcode}
            </div>
        </div>
    );
};

export default SingleUser;
