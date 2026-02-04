import AddNewColumnButton from "./AddNewColumnButton";
import Column from "./Column";

const Board = () => {
  return (
    <div className="pt-4 h-screen flex flex-col">
      <div className="w-full flex justify-center items-center mb-4">
        <AddNewColumnButton />
      </div>
      <div className="flex-1 overflow-x-auto">
        <div className="px-4 flex gap-8 h-full">
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
        </div>
      </div>
    </div>
  );
};

export default Board;
