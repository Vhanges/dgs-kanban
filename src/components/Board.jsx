import AddNewColumnButton from "./AddNewColumnButton";
import Column from "./Column";
import { useBoardStore } from "../store/useBoardStore";
import { DndContext } from "@dnd-kit/core";
const Board = () => {
  const board = useBoardStore((state) => state.columns);
  const moveTask = useBoardStore((state) => state.moveTask);

  console.log(useBoardStore.getState());

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.data.current.taskId;
    const fromColumnId = active.data.current.columnId;
    const toColumnId = over.id;

    if (fromColumnId === toColumnId) return;

    moveTask(taskId, fromColumnId, toColumnId);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="pt-4 h-screen flex flex-col">
        <div className="w-full flex justify-center items-center mb-4">
          <AddNewColumnButton />
        </div>
        <div className="flex overflow-x-auto overflow-y-hidden">
          <div className="px-4 flex">
            {board.columns.map((column) => (
              <Column column={column} />
            ))}
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default Board;
