import { useContext, useEffect, useState } from "react";
import { ToDoContext } from '../contexts/ToDoContext'
const ToDoNavBar = () => {
    const { items } = useContext(ToDoContext)
    const [doneItem, setDoneItem] = useState(0);

    useEffect(() => {
        const arr = items.filter(x => x.state === false);
        setDoneItem(arr.length);
    },[items])
    return (
        <div className="toDoNavBar">
            <h1>React To Do List</h1>
            <p>The plan has {items.length} to-dos</p>
            <p>You Finish {doneItem} to-dos</p>
        </div>
    )
}
export default ToDoNavBar;
