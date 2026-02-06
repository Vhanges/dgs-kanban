import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  UnorderedListOutlined,
  ScheduleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import { useModalStore } from "../store/modalStore";
import { MODALS } from "./modals";

const Header = () => {
  const {openModal, setModalTitle} = useModalStore();

  return (
    <div className="w-full h-fit bg-dark-dark-gray flex justify-items-center flex-row gap-3">
      <button className="text-amber-50 h-full text-base pt-3 pb-1 px-2">Board 1</button>
      <button className="text-amber-50 h-full text-base pt-3 pb-1 px-2">Board 1</button>
      <button className="text-amber-50 h-full text-base pt-3 pb-1 px-2">Board 1</button>
      <button className="text-amber-50 h-full text-base pt-3 pb-1 px-2">Board 1</button>

      <Tooltip placement="bottom" title="Add new board">
        <button onClick={() => {openModal(MODALS.NEW_BOARD); setModalTitle("New Board Editor");}} className="text-amber-50 flex items-center ml-4">
          <PlusOutlined className="text-base" />
        </button>
      </Tooltip>

      <div className="flex flex-1 items-center justify-end mx-4">
        <Tooltip placement="bottom" title="Edit current board">
          <button  className="h-full text-amber-50 flex items-center ml-4">
            <EditOutlined className="text-base" />
          </button>
        </Tooltip>

        <Tooltip placement="bottom" title="Delete board">
          <button className="h-full text-amber-50 flex items-center ml-4 mr-2">
            <DeleteOutlined className="text-base" />
          </button>
        </Tooltip>

        <h2 className="text-amber-50 text-base text-cent mx-2">●</h2>

        <Tooltip placement="bottom" title="View task list">
          <button onClick={() => {openModal(MODALS.EDIT_BOARDS); setModalTitle("Board List Editor");}} className="h-full text-amber-50 flex items-center ml-4">
            <UnorderedListOutlined className="text-base" />
          </button>
        </Tooltip>
        <Tooltip placement="bottom" title="View task calendar">
          <button className="h-full text-amber-50 flex items-center ml-4">
            <ScheduleOutlined className="text-base" />
          </button>
        </Tooltip>
        <Tooltip placement="bottom" title="Settings">
          <button className="h-full text-amber-50 flex items-center ml-4">
            <SettingOutlined />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

/**
CODE to add when i'll be addding underline on active board link:

hover:underline hover:decoration-amber-300 hover:decoration-2 hover:underline-offset-4

*/

export default Header;
