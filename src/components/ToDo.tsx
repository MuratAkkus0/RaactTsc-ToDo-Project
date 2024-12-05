import { useState } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import type { ToDo, ToDoProps } from "../types/types";
import { useDispatch } from "react-redux";
import { deleteToDo, editToDo } from "../redux/slices/toDoSlice";

function ToDo({ toDoProps }: ToDoProps) {
  const { id, content } = toDoProps;
  const [isEditable, setIsEditable] = useState(false);
  const [inputVal, setinputVal] = useState(content);
  const dispatch = useDispatch();

  const handleEdit = (): void => {
    if (isEditable) {
      const editedToDo: ToDo = {
        id,
        content: inputVal,
      };
      dispatch(editToDo(editedToDo));
    }

    setIsEditable(!isEditable);
  };
  const handleDelete = () => {
    dispatch(deleteToDo(id));
  };
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    handleEdit();
  };
  return (
    <div className="todo__list--item">
      <div className="todo--content">
        {isEditable ? (
          <input
            value={inputVal}
            id="editInput"
            onKeyUp={handleEnter}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setinputVal(e.target.value)
            }
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div className="todo--controls">
        {isEditable ? (
          <FaCheck onClick={handleEdit} className="clickable" />
        ) : (
          <FaEdit onClick={handleEdit} className="clickable" />
        )}
        <FaTrash onClick={handleDelete} className="clickable" />
      </div>
    </div>
  );
}

export default ToDo;
