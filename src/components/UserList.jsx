import React, { useEffect, useState } from "react";
import User from "./User"; 
const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Список пользователей</h1>
            {users.map(user => (
                <User key={user.id} name={user.name} email={user.email} body={user.body} />
            ))}
        </div>
    );
};
export default UserList;
