import AddNewColumnButton from "./AddNewColumnButton";
import Column from "./Column";
import { useBoardStore } from "../store/useBoardStore";

const Board = () => {
  const board = useBoardStore((state) => state);

  return (
    <div className="pt-4 h-screen flex flex-col">
      <div className="w-full flex justify-center items-center mb-4">
        <AddNewColumnButton />
      </div>
      <div className="flex-1 overflow-x-auto overflow-y-hidden">
        <div className="px-4 flex gap-8">
          {board.columns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
