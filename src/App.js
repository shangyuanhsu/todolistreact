
import ToDoContextProvider from "./contexts/ToDoContext";
import ToDoList from "./componets/ToDoList";
import NavBar from "./componets/NavBar";
import NewToDoFrom from "./componets/NewToDoFrom";

function App() {
  return (
    <div className="App">
      <ToDoContextProvider>
        <NavBar />
        <ToDoList />
        <NewToDoFrom />
      </ToDoContextProvider>
    </div>
  );
}

export default App;
