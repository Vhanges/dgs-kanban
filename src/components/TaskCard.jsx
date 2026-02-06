import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { getPriority } from "../utils/priorityIdentifier";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

const TaskCard = ({ task, columnId, isOverlay }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: { task: task, taskId: task.id, columnId },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isOverlay ? 9999 : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(!isOverlay ? listeners : {})}
      {...(!isOverlay ? attributes : {})}
      className={`group flex min-h-25 border-l-5 rounded-sm ${getPriority(task.priority)} flex-col gap-2 bg-[#C6CDD4] p-2 overflow-x-hidden ${
        isOverlay ? "shadow-lg" : ""
      }`}
    >
      <div className="flex justify-between ">
        <p className="text-sm text-dark-gray-text font-bold">{task.title}</p>
        <div className="group-hover:flex gap-1 hidden">
          <button className="cursor-pointer text-dark-gray-text hover:text-dark-gray-text/60">
            <MdModeEditOutline />
          </button>
          <button className="cursor-pointer text-dark-gray-text hover:text-dark-gray-text/60">
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
      <div>
        <p className="text-gray-text text-[12px]">{task.content}</p>
      </div>
      <div className="flex gap-2">
        {(task.tags || []).map((tag) => (
          <div key={tag.id} className="px-3 py-px bg-gray rounded-md">
            <p className="text-dark-gray-text text-[12px]" key={tag.id}>
              {tag.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
