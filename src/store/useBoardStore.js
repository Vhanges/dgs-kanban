import { create } from "zustand";
import { taskTestData } from "../data/taskTestData";
import { arrayMove } from "@dnd-kit/sortable";

export const useBoardStore = create((set) => ({
  columns: taskTestData[0]?.boardColumns || [],
  setColumns: (columns) => set({ columns }),

  moveTask: (
    taskId,
    fromColumnId,
    toColumnId,
    overTaskId = null,
    isBelow = false,
  ) =>
    set((state) => {
      const updatedColumns = state.columns.map((col) => ({
        ...col,
        tasks: [...col.tasks],
      }));

      const fromColumn = updatedColumns.find((col) => col.id === fromColumnId);
      const toColumn = updatedColumns.find((col) => col.id === toColumnId);

      if (!fromColumn || !toColumn) return state;

      const taskIndex = fromColumn.tasks.findIndex((t) => t.id === taskId);
      if (taskIndex === -1) return state;

      const [movedTask] = fromColumn.tasks.splice(taskIndex, 1);

      if (!overTaskId) {
        toColumn.tasks.push(movedTask);
        return { columns: updatedColumns };
      }

      const overIndex = toColumn.tasks.findIndex((t) => t.id === overTaskId);

      if (overIndex === -1) {
        toColumn.tasks.push(movedTask);
        return { columns: updatedColumns };
      }

      const insertIndex = isBelow ? overIndex + 1 : overIndex;

      toColumn.tasks.splice(insertIndex, 0, movedTask);

      return { columns: updatedColumns };
    }),

  reorderTask: (taskId, columnId, overTaskId) =>
    set((state) => {
      const updatedColumns = state.columns.map((col) => ({
        ...col,
        tasks: [...col.tasks],
      }));

      const column = updatedColumns.find((col) => col.id === columnId);
      if (!column) return state;

      const oldIndex = column.tasks.findIndex((t) => t.id === taskId);
      const newIndex = column.tasks.findIndex((t) => t.id === overTaskId);

      if (oldIndex === -1 || newIndex === -1) return state;

      column.tasks = arrayMove(column.tasks, oldIndex, newIndex);

      return { columns: updatedColumns };
    }),
}));
