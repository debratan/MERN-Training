import './Todolist.css';

function Todolist({todo}){
    const incomplete=todo.filter((todo)=>!todo.completed)
    return(
        <div className="todolist">
            <ul>
                {incomplete.map((todo, index) =>
                <li key={index}>{todo.title}</li>
                )}
            </ul>
        </div>
    );

}
export default Todolist;