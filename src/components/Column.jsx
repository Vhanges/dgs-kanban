import ColumnHeader from "./ColumnHeader";
import TaskCard from "./TaskCard";
import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const Column = ({ column }) => {
  const [shrink, setShrink] = useState(false);

  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  const taskIds = column.tasks.map((task) => task.id);

  return (
    <div
      ref={setNodeRef}
      className={`h-133 flex flex-col gap-1 transition-all duration-300 overflow-hidden ${shrink ? "w-14 min-w-10 border-x border-white  items-center mr-1" : "w-72 min-w-67 mr-6"}`}
    >
      <ColumnHeader
        shrink={shrink}
        setShrink={setShrink}
        title={column.name}
        total={column.tasks.length}
      />
      <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
        <div
          className={`flex flex-col gap-3 overflow-y-scroll overflow-x-hidden transition-all duration-500 ${shrink ? "hidden" : "visible"}`}
        >
          {column.tasks.map((task) => (
            <TaskCard key={task.id} task={task} columnId={column.id} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

export default Column;
