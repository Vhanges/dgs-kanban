import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";

const TaskCard = ({ taskTitle, content, tags }) => {
  return (
    <div className="group flex min-h-25 border-l-5 rounded-sm border-dark-green flex-col gap-2 bg-[#C6CDD4] p-2">
      <div className="flex justify-between ">
        <p className="text-sm text-dark-gray-text font-bold">{taskTitle}</p>
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
        <p className="text-gray-text text-[12px]">{content}</p>
      </div>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <div className="px-3 py-[1px] bg-gray rounded-md">
            <p className="text-dark-gray-text text-[12px]" key={tag.id}>
              {tag.tagName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
