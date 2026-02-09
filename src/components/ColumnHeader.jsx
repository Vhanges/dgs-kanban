import { Button, Tooltip } from "antd";
import { IoAddSharp } from "react-icons/io5";
import { MdModeEditOutline, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const ColumnHeader = ({
  shrink,
  setShrink,
  title,
  total,
  showAddNewTaskPanel,
}) => {
  const columnShrink = () => {
    setShrink(true);
  };

  const columnUnShrink = () => {
    setShrink(false);
  };

  return (
    <>
      {shrink ? (
        <div className="">
          <MdOutlineKeyboardArrowLeft
            className={`w-8 h-8 cursor-pointer transition-transform ${shrink ? "rotate-180" : ""}`}
            onClick={columnUnShrink}
          />
          <p
            className="w-full text-sm h-30 flex items-center justify-center rotate-180"
            style={{ writingMode: "vertical-lr", textOrientation: "downright" }}
          >
            {`${title} [${total}]`}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-1 min-w-67">
          <div className="flex items-center gap-4">
            <h3 className="text-md font-medium">{title}</h3>
            <div className="flex gap-2">
              <Tooltip title="Add task to column">
                <Button
                  onClick={showAddNewTaskPanel}
                  className="cursor-pointer p-1 hover:bg-white/5 rounded-sm flex items-center justify-center"
                  type="primary"
                >
                  <IoAddSharp className="w-5 h-5" />
                </Button>
              </Tooltip>
              <Tooltip title="Edit column">
                <Button
                  className="cursor-pointer p-1 hover:bg-white/5 rounded-sm flex items-center justify-center"
                  type="primary"
                >
                  <MdModeEditOutline className="w-5 h-4" />
                </Button>
              </Tooltip>
              <Tooltip title="Edit Columns">
                <Button
                  className="cursor-pointer p-1 hover:bg-white/5 rounded-sm flex items-center justify-center"
                  type="primary"
                >
                  <RiDeleteBin6Line className="w-5 h-4" />
                </Button>
              </Tooltip>
            </div>
          </div>
          <div>
            <div className=" border-b-2 border-white border-solid  flex justify-between items-center">
              <p className="text-sm">Items Count: {total} | Max: 10</p>
              <MdOutlineKeyboardArrowLeft
                className={`w-8 h-8 cursor-pointer transition-transform ${shrink ? "rotate-180" : ""}`}
                onClick={columnShrink}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ColumnHeader;
