import { useState, useRef } from "react";
import Task from "./Task";
import "../assets/style.css";
import { Link } from "react-router-dom";

const TasksList = () => {
    const initialState = ["Задача 1", "Задача 2", "Задача 3"];
    const [tasks, setTasks] = useState(initialState);
    const newTaskRef = useRef();

    const handleClickAdd = () => {
        const newTask = newTaskRef.current.value.trim();
        if (newTask) {
            setTasks([...tasks, newTask]);
            newTaskRef.current.value = "";
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Менеджер задач</h1>
            <Link to="/users">Перейти к пользователям</Link> {/* Ссылка на users */}
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
