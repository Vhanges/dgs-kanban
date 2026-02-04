import { PlusOutlined, EditOutlined, DeleteOutlined, UnorderedListOutlined, ScheduleOutlined, SettingOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const Header = () => {
  return (
    <>
      <div className="w-full h-fit bg-dark-dark-gray flex justify-items-center flex-row gap-3">
        
        <a href="" className="text-amber-50 h-full text-base pt-3 pb-1 px-2">Board 1</a>
        <a href="" className="text-amber-50 h-full text-base pt-3 pb-1 px-2">Board 1</a>
        <a href="" className="text-amber-50 h-full text-base pt-3 pb-1 px-2">Board 1</a>
        <a href="" className="text-amber-50 h-full text-base pt-3 pb-1 px-2">Board 1</a>

        <Tooltip placement="bottom" title="Add tool tip">  
          <a href="" className="text-amber-50 flex items-center ml-4"> 
            <PlusOutlined className="text-base"/>
          </a>
        </Tooltip>

        <div className="flex flex-1 items-center justify-end mx-4">
          <Tooltip placement="bottom" title="Edit current board">
            <a href="" className="h-full text-amber-50 flex items-center ml-4">
              <EditOutlined className="text-base"/> 
            </a>
          </Tooltip>

          <Tooltip placement="bottom" title="View board list">
            <a href="" className="h-full text-amber-50 flex items-center ml-4 mr-2">
              <DeleteOutlined className="text-base"/>
            </a>
          </Tooltip>

          <h2 className="text-amber-50 text-base text-cent mx-2">
            ●
          </h2>
          
          <Tooltip placement="bottom" title="View task list">
            <a href="" className="h-full text-amber-50 flex items-center ml-4">
              <UnorderedListOutlined className="text-base"/>
            </a>
          </Tooltip>
          <Tooltip placement="bottom" title="View task calendar">
            <a href="" className="h-full text-amber-50 flex items-center ml-4">
              <ScheduleOutlined className="text-base"/>
            </a>
          </Tooltip>
          <Tooltip placement="bottom" title="Settings">
            <a href="" className="h-full text-amber-50 flex items-center ml-4">
              <SettingOutlined />
            </a>
          </Tooltip>
        </div>

      </div>

    </>
  );
};

/**
CODE to add when i'll be addding underline on active board link:

hover:underline hover:decoration-amber-300 hover:decoration-2 hover:underline-offset-4

*/  

export default Header;
