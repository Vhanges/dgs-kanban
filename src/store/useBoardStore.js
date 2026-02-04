import { create } from "zustand";
import { taskTestData } from "../data/taskTestData";

export const useBoardStore = create((set) => ({
  columns: taskTestData,
  setColumns: (columns) => set({ columns }),
}));
