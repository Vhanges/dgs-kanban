import ColumnHeader from "./ColumnHeader";
import TaskCard from "./TaskCard";
import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";

const Column = ({ column }) => {
  const [shrink, setShrink] = useState(false);

  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-col gap-1 transition-all duration-300 overflow-hidden ${shrink ? "w-14 min-w-10 border-x border-white  items-center mr-1" : "w-72 min-w-67 mr-6"} h-300`}
    >
      <ColumnHeader
        shrink={shrink}
        setShrink={setShrink}
        title={column.name}
        total={column.tasks.length}
      />
      <div
        className={`flex flex-col gap-3 overflow-y-scroll transition-all duration-500 ${shrink ? "hidden" : "visible"}`}
      >
        {column.tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            content={task.content}
            taskTitle={task.title}
            priority={task.priority}
            tags={[...task.tags]}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
