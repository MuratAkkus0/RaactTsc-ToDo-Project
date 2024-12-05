import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToDo, toDoInitialState } from "../../types/types";
import { toast } from "sonner";

const initialState: toDoInitialState = {
  toDos: [],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    createToDo: (state: toDoInitialState, action: PayloadAction<ToDo>) => {
      state.toDos = [...state.toDos, action.payload];
      toast.success("Task successfuly added!");
    },
    editToDo: (state: toDoInitialState, action: PayloadAction<ToDo>) => {
      state.toDos = [
        ...state.toDos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      ];
      toast.info("Task successfuly edited!");
    },
    deleteToDo: (state: toDoInitialState, action: PayloadAction<number>) => {
      state.toDos = [
        ...state.toDos.filter((todo) => todo.id !== action.payload),
      ];
      toast.success("Task successfuly deleted!");
    },
  },
});

export const { createToDo, editToDo, deleteToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
