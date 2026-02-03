import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddNewColumnButton = () => {
  return (
    <Button className="flex gap-2">
      <PlusOutlined />
      New Column
    </Button>
  );
};

export default AddNewColumnButton;
