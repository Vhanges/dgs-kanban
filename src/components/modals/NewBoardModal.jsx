import { Button, Input, Form } from "antd";

const NewBoardModal = ({ closeModal }) => {
    // const [form] = Form.useForm();

    return (
        <>
            <p>Hello broski</p>
            <div className="flex justify-end gap-2">
                <Button onClick={closeModal}>Cancel</Button>
                <Button type="primary" htmlType="submit">Create</Button>
            </div>
        </>
    )
};

export default NewBoardModal;