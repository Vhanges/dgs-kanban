import { PlusOutlined } from "@ant-design/icons";

const AddNewColumnButton = () => {
  return (
    <button className="cursor-pointer flex gap-2 bg-dark-medium-gray hover:bg-[#3b3f47] px-2 py-1.75 rounded-sm justify-center items-center">
      <PlusOutlined />
      <p className=" text-[13px]"> New Column</p>
    </button>
  );
};

export default AddNewColumnButton;
