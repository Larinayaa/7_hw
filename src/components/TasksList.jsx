import { useState, useRef } from "react";
import Task from "./Task";
import "../assets/style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice"; 
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
            <Link to="/posts">Перейти к постам</Link>
            <button onClick={handleToggleTheme} className="btn btn-secondary">
                Переключить тему
            </button>
            <div className="input-group mb-3">
                <input ref={newTaskRef} type="text" className="form-control" />
                <button
                    className="btn btn-primary"
                    style={{ backgroundColor: "#ff69b4", borderColor: "#ff69b4" }}
                    onClick={handleClickAdd}
                >
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