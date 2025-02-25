import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/userSlice";
import User from "./User";
const UserList = () => {
    const dispatch = useDispatch();
    const { users, status, error } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(fetchUsers()); 
    }, [dispatch]);
    if (status === "loading") return <p>Загрузка...</p>;
    if (status === "failed") return <p>Ошибка: {error}</p>;
    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Список пользователей</h1>
            {users.map((user) => (
                <User key={user.id} name={user.name} email={user.email} body={user.company.catchPhrase} />
            ))}
        </div>
    );
};

export default UserList;
