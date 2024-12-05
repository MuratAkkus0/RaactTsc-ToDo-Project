import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { createToDo } from "../redux/slices/toDoSlice";
import { ToDo } from "../types/types";

function ToDoCreate() {
  const dispatch = useDispatch();
  const [inputVal, setinputVal] = useState("");

  const handleCreateToDo = () => {
    if (inputVal.trim().length === 0) {
      alert("Please write a task.");
      return;
    }

    const newToDo: ToDo = {
      id: Math.floor(Math.random() * 99999999999999),
      content: inputVal,
    };
    dispatch(createToDo(newToDo));
    setinputVal("");
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    handleCreateToDo();
  };
  return (
    <div className="todo__input--container">
      <input
        value={inputVal}
        onKeyUp={handleEnter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setinputVal(e.target.value)
        }
        type="text"
        className="todo__input"
      />
      <button type="button" onClick={handleCreateToDo} id="addTodo">
        <MdAdd />
      </button>
    </div>
  );
}

export default ToDoCreate;
