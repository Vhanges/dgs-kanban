import NewBoardModal from "./NewBoardModal";
import { registerModal } from "../../store/modalStore"; 

registerModal("newBoard", NewBoardModal);

export const MODALS = {
    NEW_BOARD: "newBoard",
};