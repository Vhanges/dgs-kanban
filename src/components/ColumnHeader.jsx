import { Button, Tooltip } from "antd";
import { IoAddSharp } from "react-icons/io5";
import { MdModeEditOutline, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const ColumnHeader = () => {
  return (
    <div className="flex flex-col gap-1 py-2 pl-2 w-67">
      <div className="flex items-center gap-4">
        <h3 className="text-md font-medium">To Do</h3>
        <div className="flex gap-2">
          <Tooltip title="Add task to column">
            <button
              className="cursor-pointer p-1 hover:bg-white/5 rounded-sm flex items-center justify-center"
              type="primary"
              ghost
            >
              <IoAddSharp className="w-5 h-5" />
            </button>
          </Tooltip>
          <Tooltip title="Edit column">
            <button
              className="cursor-pointer p-1 hover:bg-white/5 rounded-sm flex items-center justify-center"
              type="primary"
              ghost
            >
              <MdModeEditOutline className="w-5 h-4" />
            </button>
          </Tooltip>
          <Tooltip title="Edit Columns">
            <button
              className="cursor-pointer p-1 hover:bg-white/5 rounded-sm flex items-center justify-center"
              type="primary"
              ghost
            >
              <RiDeleteBin6Line className="w-5 h-4" />
            </button>
          </Tooltip>
        </div>
      </div>
      <div>
        <div className=" border-b-2 border-white border-solid  flex justify-between items-center">
          <p className="text-sm">Items Count: 1 | Max: 10</p>
          <MdOutlineKeyboardArrowLeft className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default ColumnHeader;
