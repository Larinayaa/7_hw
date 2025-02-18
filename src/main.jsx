import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TasksList from "./components/TasksList";
import UserList from "./components/UserList";
import "./assets/style.css";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter basename="/7_hw">
            <nav>
                <Link to="/">Задачи</Link>
                <Link to="/users">Пользователи</Link>
            </nav>
            <Routes>
                <Route path="/" element={<TasksList />} />
                <Route path="/users" element={<UserList />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
