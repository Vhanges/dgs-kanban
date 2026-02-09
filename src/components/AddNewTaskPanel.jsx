import { Drawer } from "antd";

const AddNewTaskPanel = (onClose, open) => {
  return (
    <Drawer
      title="Basic Drawer"
      closable={{ "aria-label": "Close Button" }}
      onClose={onClose}
      open={open}
    ></Drawer>
  );
};

export default AddNewTaskPanel;
