import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux"; 
import { removeTask, updateTask } from "../store/taskSlice";
const Task = ({ name, index }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(name);
  const [isCompleted, setIsCompleted] = useState(false);
  const textRef = useRef(null);
  const dispatch = useDispatch(); 

  const handleTask = (action) => {
    switch (action) {
      case "save":
        if (textRef.current) {
          dispatch(updateTask({ index, updatedTask: textRef.current.value })); 
          setUpdatedTask(textRef.current.value);
          setIsEdit(false);
        }
        break;
      case "delete":
        dispatch(removeTask(index)); 
        break;
      case "edit":
        setIsEdit(true);
        break;
      default:
        console.error("Неизвестное действие:", action);
    }
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => setIsCompleted(!isCompleted)}
      />
      {isEdit ? (
        <>
          <textarea ref={textRef} defaultValue={updatedTask}></textarea>
          <button onClick={() => handleTask("save")}>Сохранить</button>
        </>
      ) : (
        <p className={isCompleted ? "completed" : ""}>{updatedTask}</p>
      )}
      <span className={`status ${isCompleted ? "status-done" : "status-pending"}`}>
        {isCompleted ? "Выполнено" : "Не выполнено"}
      </span>
      <button onClick={() => handleTask("edit")}>Редактировать</button>
      <button onClick={() => handleTask("delete")}>Удалить</button>
    </div>
  );
};
export default Task;