import React,{useState} from "react";
import './app.css';
function App() {
  const [todos,settodos]=useState([])
  const [todo,settodo]=useState('')
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input type="text"  value={todo} onChange={(e)=>settodo(e.target.che)} placeholder="🖊️ Add item..." />
      <i onClick={()=>settodos(
        [...todos,{id:Date.now(),text :todo,status:false}]
        )}
       className="fas fa-plus"></i>
    </div>
    <div className="todos">
      { 
      todos.map((value)=>{
      return(
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(value)
              settodos(todos.filter(value2=>{
                if(value2.id===value.id){
                  value2.status=e.target.checked
                }
                return value2
              }))
            }} value={value.status} type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
      })
      }
      {todos.map((value)=>{
        if(value.status){
          return(<h1>{value.text}</h1>)
        }
        return null;
      }
      )}
    </div>
  </div>
  );
}

export default App; 
