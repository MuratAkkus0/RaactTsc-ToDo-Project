export interface ToDo {
  id: number;
  content: string;
}

export interface toDoInitialState {
  toDos: ToDo[];
}

export interface ToDoProps {
  toDoProps: ToDo;
}
