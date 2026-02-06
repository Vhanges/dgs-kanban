import NewBoardModal from "./NewBoardModal";
import { registerModal } from "../../store/modalStore"; 
import EditBoardsModal from "./EditBoardsModal";

registerModal("newBoard", NewBoardModal);
registerModal("editBoards", EditBoardsModal);

export const MODALS = {
    NEW_BOARD: "newBoard",
    EDIT_BOARDS: "editBoards",
};