import { create } from "zustand";
import { taskTestData } from "../data/taskTestData";

const initialBoardId = taskTestData[0]?.id || null;

export const useBoardStore = create((set) => ({
  boards: taskTestData,
  boardInUse: initialBoardId,
  columns: taskTestData[initialBoardId]?.boardColumns || [],
  
  setBoardInUse: (boardId) =>
    set(() => {
      const board = taskTestData.find((b) => b.id === boardId);
      return {
        boardInUse: boardId,
        columns: board?.boardColumns || [],
      };
    }),
    
  setColumns: (columns) => set({ columns }),

  moveTask: (
    taskId,
    fromColumnId,
    toColumnId,
    overTaskId = null,
    isBelow = false
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

  reorderTask: (taskId, columnId, overTaskId, isBelow = false) =>
    set((state) => {
      const updatedColumns = state.columns.map((col) => ({
        ...col,
        tasks: [...col.tasks],
      }));

      const column = updatedColumns.find((col) => col.id === columnId);
      if (!column) return state;

      const taskIndex = column.tasks.findIndex((t) => t.id === taskId);
      const overIndex = column.tasks.findIndex((t) => t.id === overTaskId);

      if (taskIndex === -1 || overIndex === -1) return state;

      const [movedTask] = column.tasks.splice(taskIndex, 1);

      let insertIndex = isBelow ? overIndex + 1 : overIndex;
      if (taskIndex < overIndex) insertIndex--;

      column.tasks.splice(insertIndex, 0, movedTask);

      return { columns: updatedColumns };
    }),
}));
