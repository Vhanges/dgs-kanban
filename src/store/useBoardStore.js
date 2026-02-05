import { create } from "zustand";
import { taskTestData } from "../data/taskTestData";

export const useBoardStore = create((set) => ({
  columns: taskTestData,
  setColumns: (columns) => set({ columns }),

  moveTask: (taskId, fromColumnId, toColumnId) =>
    set((state) => {
      const updatedColumns = [...state.columns];

      const fromColumn = updatedColumns.find((col) => col.id === fromColumnId);
      const toColumn = updatedColumns.find((col) => col.id === toColumnId);

      if (!fromColumn || !toColumn) return state;

      const taskIndex = fromColumn.tasks.findIndex((t) => t.id === taskId);
      if (taskIndex === -1) return state;

      const [movedTask] = fromColumn.tasks.splice(taskIndex, 1);
      toColumn.tasks.push(movedTask);

      return { columns: updatedColumns };
    }),
}));
