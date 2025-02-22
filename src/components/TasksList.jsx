import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleTheme } from "../store/themeSlice";
import Counter from "./Counter"; 
import Task from "./Task";
import "../assets/style.css";
const TasksList = () => {
    const initialState = ["Задача 1", "Задача 2", "Задача 3"];
    const [tasks, setTasks] = useState(initialState);
    const newTaskRef = useRef();
    const dispatch = useDispatch();
    const currentTheme = useSelector((state) => state.theme.theme);

    const handleClickAdd = () => {
        const newTask = newTaskRef.current.value.trim();
        if (newTask) {
            setTasks([...tasks, newTask]);
            newTaskRef.current.value = "";
        }
    };

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className={`container mt-4 ${currentTheme === "dark" ? "dark-theme" : "light-theme"}`}>
            <h1 className="mb-4 text-center">Менеджер задач</h1>
            <div className="d-flex justify-content-between mb-3">
                <Link to="/posts" className="btn btn-outline-primary">Перейти к постам</Link>
                <button onClick={handleToggleTheme} className="btn btn-secondary">
                    {currentTheme === "dark" ? "Светлая тема" : "Тёмная тема"}
                </button>
            </div>

            {/* Вставляем Counter */}
            <Counter />

            <div className="input-group mb-3">
                <input ref={newTaskRef} type="text" className="form-control" placeholder="Введите новую задачу..." />
                <button className="btn btn-primary" onClick={handleClickAdd}>
                    Добавить задачу
                </button>
            </div>
            <div>
                {tasks.map((task, i) => (
                    <Task key={i} name={task} index={i} tasks={tasks} setTasks={setTasks} />
                ))}
            </div>
        </div>
    );
};

export default TasksList;
