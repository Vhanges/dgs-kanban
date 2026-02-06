import { Button, Input, Form } from "antd";
import { SaveOutlined, CloseOutlined } from "@ant-design/icons";


const NewBoardModal = ({ closeModal }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log("Form Values:", values);
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark={false}
            className="custom-form"
        >
            <Form.Item
                label="Board Name"
                name="boardName"
                requiredMarker={false}
                className="custom-form-item w-70"
            >
                <Input placeholder="Enter board name" className="custom-input" />
            </Form.Item>

            <Form.Item
                label="Board Notes"
                name="boardNotes"
                className="custom-form-item w-70"
            >
                <Input.TextArea placeholder="Enter board notes" rows={4} className="custom-textarea" />
            </Form.Item>

            <div className="flex justify-center gap-6 border-t-2 border-dark-gray pt-4">
                <button type="primary" htmlType="submit" className="text-white">
                    <SaveOutlined className="text-xl" />
                </button>
                <button onClick={closeModal} className="text-white">
                    <CloseOutlined className="text-xl" />
                </button>
            </div>
        </Form>
    );
};

export default NewBoardModal;