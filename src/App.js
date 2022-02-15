
import ToDoContextProvider from "./contexts/ToDoContext";
import ToDoList from "./componets/ToDoList";
import ToDoNavBar from "./componets/ToDoNavBar";
import NewToDoFrom from "./componets/NewToDoFrom";

function App() {
  return (
    <div className="App">
      <ToDoContextProvider>
        <ToDoNavBar />
        <ToDoList />
        <NewToDoFrom />
      </ToDoContextProvider>
    </div>
  );
}

export default App;
