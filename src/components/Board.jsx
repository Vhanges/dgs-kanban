import AddNewColumnButton from "./AddNewColumnButton";
import Column from "./Column";
import { useBoardStore } from "../store/useBoardStore";
import { useState } from "react";
import TaskCard from "./TaskCard";
import { DndContext, DragOverlay, closestCorners } from "@dnd-kit/core";

const Board = () => {
  const columns = useBoardStore((state) => state.columns);
  const moveTask = useBoardStore((state) => state.moveTask);
  const reorderTask = useBoardStore((state) => state.reorderTask);
  const [activeTask, setActiveTask] = useState(null);

  const handleDragStart = (event) => {
    setActiveTask(event.active.data.current.task);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;

    // setActiveTask(null);

    if (!over) return;

    const activeTaskId = active.id;
    const fromColumnId = active.data.current.columnId;

    const overColumnId = over.data.current?.columnId || over.id;
    const overTaskId = over.data.current?.taskId || null;

    if (activeTaskId === overTaskId) return;

    if (!overTaskId) {
      moveTask(activeTaskId, fromColumnId, overColumnId, null);
      return;
    }

    const activeRect = active.rect.current.translated;
    const overRect = over.rect;

    if (!activeRect || !overRect) return;

    const isBelow = activeRect.top > overRect.top + overRect.height / 2;

    if (fromColumnId === overColumnId) {
      reorderTask(activeTaskId, fromColumnId, overTaskId, isBelow);
    } else {
      moveTask(activeTaskId, fromColumnId, overColumnId, overTaskId, isBelow);
    }
  };

  const handleDragEnd = () => {
    setActiveTask(null);
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      collisionDetection={closestCorners}
    >
      <div className="pt-4 flex flex-col overflow-y-hidden">
        <div className="w-full flex justify-center items-center mb-4">
          <AddNewColumnButton />
        </div>
        <div className="flex flex-1 overflow-x-auto overflow-y-hidden">
          <div className="px-4 flex">
            {columns?.map((column) => (
              <Column key={column.id} column={column} />
            ))}
          </div>
        </div>
      </div>

      <DragOverlay>
        {activeTask ? <TaskCard task={activeTask} isOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Board;
