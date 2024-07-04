import "./Todo.css";
import React, { useState } from "react";

const Todos = () => {
  const gettodo = () => {
    const savedtodo = sessionStorage.getItem("todo");
    return savedtodo ? JSON.parse(savedtodo) : [];
  };

  const [todo, settodo] = useState(gettodo);
  const [newtitle, setnewtitle] = useState("");
  const [editindex, seteditindex] = useState(null);
  const [edittitle, setedittitle] = useState("");

  const savetodosession = (todo) => {
    sessionStorage.setItem("todo", JSON.stringify(todo));
  };

  const addtodo = () => {
    if(newtitle.trim() ==='') return alert('Task can not be empty.');
    const update = [...todo, { title: newtitle, completed: false }];
    settodo(update);
    savetodosession(update);
    setnewtitle("");
  };
  const deletetodo = (index) => {
    const update = todo.filter((e, i) => i !== index);
    settodo(update);
    savetodosession(update);
  };
  const edittodo = (index) => {
    seteditindex(index);
    setedittitle(todo[index].title);
  };
  const updatetodo = () => {
    if(edittitle.trim() ==='') return alert('Task can not be empty.');
    const update = [...todo];
    update[editindex] = { ...updatetodo[editindex], title: edittitle };
    settodo(update);
    savetodosession(update);
    seteditindex(null);
    setedittitle("");
  };
  const todocompleted=(index)=>{
    const complete = [...todo];
    complete[index].completed=!complete[index].completed;
    settodo(complete);
    savetodosession(complete);
  }
  return (
    <div className="main">
      <h1>ToDo List</h1>
      <div className="listdiv">
        <div className="inputdiv">
          <input
            type="text"
            className="input"
            value={newtitle}
            onChange={(e) => setnewtitle(e.target.value)}
            placeholder="Enter your task"
          />
          <button type="submit" onClick={addtodo}>
            Add
          </button>
        </div>
        {editindex !== null && (
          <div className="updatediv">
            <input
              type="text"
              className="input"
              value={edittitle}
              onChange={(e) => setedittitle(e.target.value)}
              placeholder="Edit task"
            />
            <button type="submit" onClick={updatetodo}>
              Update
            </button>
          </div>
        )}
        <div className="taskfield">
          {todo.map((todo, i) => (
            <div className="task" key={i}>
              <div className={`taskname ${todo.completed ? 'complete':''}`} onClick={()=>todocompleted(i)}>
                {i + 1}. {todo.title}
              </div>
              <div className="btndiv">
                <button
                  id="editbtn"
                  onClick={() => {
                    edittodo(i);
                  }}
                >
                  Edit
                </button>
                <button id="deletebtn" onClick={() => deletetodo(i)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Todos;
