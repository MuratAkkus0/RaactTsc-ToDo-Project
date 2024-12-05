import { useSelector } from "react-redux";
import ToDo from "./ToDo";
import type { RootState } from "../redux/store";

function ToDoList() {
  const { toDos } = useSelector((store: RootState) => store.toDo);

  return (
    <div className="todo__list--container">
      {toDos && toDos.length === 0 ? "All tasks are complated!" : ""}
      {toDos && toDos.map((item) => <ToDo key={item.id} toDoProps={item} />)}
    </div>
  );
}

export default ToDoList;
