import { Toaster } from "sonner";
import "./assets/css/App.css";
import ToDoCreate from "./components/ToDoCreate";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <ToDoCreate />
      <ToDoList />
    </>
  );
}

export default App;
