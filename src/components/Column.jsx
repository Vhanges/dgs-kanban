import ColumnHeader from "./ColumnHeader";
import TaskCard from "./TaskCard";
import { useState } from "react";

const Column = ({ column }) => {
  const [shrink, setShrink] = useState(false);

  return (
    <>
      {shrink ? (
        <div>
          <ColumnHeader
            shrink={shrink}
            setShrink={setShrink}
            title={column.title}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-1 min-w-67 h-300">
          <ColumnHeader
            shrink={shrink}
            setShrink={setShrink}
            title={column.title}
          />
          <div className="flex flex-col gap-3 overflow-y-scroll ">
            <TaskCard
              content={column.content}
              taskTitle={column.taskTitle}
              priority={column.priority}
              tags={[...column.tags]}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Column;
