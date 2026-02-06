import BoardPage from "./pages/BoardPage";
import ModalRenderer from "./components/ModalRenderer";
function App() {
  return (
    <div className="h-screen bg-dark-blue-gray-100">
      <BoardPage />
      <ModalRenderer />
    </div>
  );
}

export default App;
