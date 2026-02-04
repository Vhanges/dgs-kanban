import { create } from "zustand";

export const useShrinkStore = create((set) => ({
  shrinkColumns: {},

  toggleShrink: (columnId) =>
    set((state) => ({
      shrinkColumns: {
        ...state.shrinkColumns,
        [columnId]: !state.shrinkColumns[columnId],
      },
    })),
}));
