import AddNewColumnButton from "./AddNewColumnButton";
import Column from "./Column";
import TaskCard from "./TaskCard";
import { useBoardStore } from "../store/useBoardStore";
import { useState } from "react";
import { DndContext, DragOverlay, closestCorners } from "@dnd-kit/core";
import AddNewTaskModal from "./AddNewTaskPanel";
import { Drawer } from "antd";

const Board = () => {
  const columns = useBoardStore((state) => state.columns);
  const moveTask = useBoardStore((state) => state.moveTask);
  const reorderTask = useBoardStore((state) => state.reorderTask);
  const [openNewTaskPanel, setOpenNewTaskPanel] = useState(false);


  const [activeTask, setActiveTask] = useState(null);

  const showAddNewTaskPanel = () => {
    setOpenNewTaskPanel(true);
  };

  const onClose = () => {
    setOpenNewTaskPanel(false);
  };

  const getDragData = ({ active, over }) => {
    if (!over) return null;

    return {
      activeTaskId: active.id,
      fromColumnId: active.data.current.columnId,
      overColumnId: over.data.current?.columnId || over.id,
      overTaskId: over.data.current?.taskId || null,
    };
  };

  const handleDragStart = (event) => {
    setActiveTask(event.active.data.current.task);
  };

  const handleDragOver = (event) => {
    const data = getDragData(event);
    if (!data) return;

    const { activeTaskId, fromColumnId, overColumnId, overTaskId } = data;

    if (activeTaskId === overTaskId) return;

    if (!overTaskId) {
      moveTask(activeTaskId, fromColumnId, overColumnId);
      return;
    }

    const activeRect = event.active.rect.current.translated;
    const overRect = event.over.rect;
    if (!activeRect || !overRect) return;

    const isBelow = activeRect.top > overRect.top + overRect.height / 2;

    if (fromColumnId === overColumnId) {
      reorderTask(activeTaskId, fromColumnId, overTaskId, isBelow);
    } else {
      moveTask(activeTaskId, fromColumnId, overColumnId, overTaskId, isBelow);
    }
  };

  const handleDragEnd = (event) => {
    const data = getDragData(event);
    setActiveTask(null);

    if (!data) return;

    const { activeTaskId, fromColumnId, overColumnId, overTaskId } = data;

    if (fromColumnId === overColumnId) {
      if (overTaskId && activeTaskId !== overTaskId) {
        reorderTask(activeTaskId, fromColumnId, overTaskId);
      }
    } else {
      moveTask(activeTaskId, fromColumnId, overColumnId, overTaskId);
    }
  };

  return (
    <>
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <div className="pt-4 flex flex-col overflow-y-hidden h-screen">
          <div className="w-full flex justify-center items-center mb-4">
            <AddNewColumnButton />
          </div>

          <div className="flex flex-1 overflow-x-auto overflow-y-hidden">
            <div className="px-4 flex">
              {columns?.map((column) => (
                <Column
                  showAddNewTaskPanel={showAddNewTaskPanel}
                  key={column.id}
                  column={column}
                />
              ))}
            </div>
          </div>
        </div>

        <DragOverlay>
          {activeTask ? <TaskCard task={activeTask} isOverlay /> : null}
        </DragOverlay>
      </DndContext>
      <Drawer
        open={openNewTaskPanel}
        title="Basic Drawer"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
      ></Drawer>
    </>
  );
};

export default Board;
