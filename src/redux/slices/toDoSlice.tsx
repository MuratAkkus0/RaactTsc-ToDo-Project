import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToDo, toDoInitialState } from "../../types/types";

const initialState: toDoInitialState = {
  toDos: [],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {},
});

export const {} = toDoSlice.actions;
export default toDoSlice.reducer;
