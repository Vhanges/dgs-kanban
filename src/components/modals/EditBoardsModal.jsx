import { Form, Checkbox } from "antd";
import { useState } from "react";
import { useBoardStore } from "../../store/useBoardStore";

const EditBoardsModal = ({closeModal}) => {

    const boardList = useBoardStore((state) => state.boards);
    const [checkedItems, setCheckedItems] = useState({});

    const handleItemClick = (boardId) => {
        setCheckedItems((prev) => ({
            ...prev,
            [boardId]: !prev[boardId]
        }));
    };

    return(
        <Form className="w-90 max-h-80 overflow-y-auto flex flex-col ">
            <div className="flex-1 gap-1 overflow-y-auto">
                {boardList.map((board) => {
                  
                  const boardName = board.boardName;
                  const boardNotes = board.boardNotes;
                  const isChecked = checkedItems[board.id];

                  return (
                    <Form.Item 
                        key={board.id}
                        className={`hover:bg-dark-black w-fill cursor-pointer transition-colors ${
                            isChecked ? "bg-dark-blue" : ""
                        }`}
                        onClick={() => handleItemClick(board.id)}
                    >
                        <div className="w-fill flex gap-3 p-2">
                            <Checkbox checked={isChecked} onChange={() => {}}/>

                            <span className="flex flex-col">
                                <p className="text-white text-base font-semibold">{boardName}</p>
                                <p className="text-white text-sm">{boardNotes}</p>    
                            </span>            
                        </div>  
                    </Form.Item>
                  )
                  
                })}
            </div>
            
            <div className="flex justify-center gap-2 pt-4 mt-4">
                <button type="primary" htmlType="submit" className="flex-1 text-white bg-dark-gray py-1.5 radius-3 rounded-sm">
                    Edit Selected Item(s)
                </button>
                <button onClick={closeModal} className="flex-1 text-white bg-dark-gray py-1.5 radius-3 rounded-sm">
                    Close
                </button>
            </div>
        </Form>
    );


}


export default EditBoardsModal;
