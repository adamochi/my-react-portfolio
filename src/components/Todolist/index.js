import React, { useState } from "react";
// import "./index.scss";

const TodoList = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  //   console.log(toDos);
  //   console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="make a to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
/*
import React, { useState, useRef } from "react";
// import "./index.scss";

const TodoList = () => {
  const [toDo, setToDo] = useState("");
  let [toDos, setToDos] = useState([]);

  const savedToDos = localStorage.getItem("todos");
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // console.log(parsedToDos[0].text);
  }

  const saveToDos = () => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  };

  const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newToDo = toDoInput.current.value;
    const newTodoObject = {
      text: newToDo,
      id: Date.now(),
    };
    console.log(newTodoObject);
    setToDos([...toDos, newTodoObject]);
    console.log(toDos);
    saveToDos();
    toDoInput.current.value = "";
  };

  //   function deleteToDo(event) {
  //     event.preventDefault();
  //     console.log(event);
  //     // const li = event.target.parentElement;
  //     // li.remove();
  //     // toDos = toDos.filter((toDo) => toDo.id !== parseInt(li));
  //     // saveToDos();
  //   }

  return (
    <form onSubmit={handleToDoSubmit}>
      <input required ref={toDoInput} type="text" placeholder="make a todo" />
      <ul className="toodoo">
        {toDos.map((todo) => {
          return (
            <li className="todo-li" key={todo.id}>
              {todo.text}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const dis = todo.id;
                  toDos = toDos.filter((todo) => todo.id !== JSON.parse(dis));
                  console.log(toDos);
                  saveToDos();
                }}
                className="deleteBtn"
                key={todo.id}
              >
                ✔
              </button>
            </li>
          );
        })}
      </ul>
      <h2>hi</h2>
    </form>
  );
};

export default TodoList;
*/
/*
import React, { useState, useRef } from "react";
import { useEffect } from "react";
import "./index.scss";

const TodoList = () => {
  let [toDos, setToDos] = useState();
  const toDoInput = useRef();

  const saveToDos = () => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  };

  const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newToDo = toDoInput.current.value;
    const newTodoObject = {
      text: newToDo,
      id: Date.now(),
    };
    console.log(newTodoObject);
    setToDos((toDos) => [...toDos, newTodoObject]);
    console.log(toDos);
    saveToDos();
    toDoInput.current.value = "";
  };

  const savedToDos = localStorage.getItem("todos");
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    console.log(toDos);
    // console.log(parsedToDos[0].text);
  }

  //   function deleteToDo(event) {
  //     event.preventDefault();
  //     console.log(event);
  //     // const li = event.target.parentElement;
  //     // li.remove();
  //     // toDos = toDos.filter((toDo) => toDo.id !== parseInt(li));
  //     // saveToDos();
  //   }

  return (
    <form onSubmit={handleToDoSubmit}>
      <input required ref={toDoInput} type="text" placeholder="make a todo" />
      <ul className="toodoo"></ul>
      <h2>hi</h2>
    </form>
  );
};

export default TodoList;
/*

{toDos.map((todo) => {
          return (
            <li className="todo-li" key={todo.id}>
              {todo.text}
            </li>
          );
        })}

<button
                onClick={(e) => {
                  e.preventDefault();
                  const dis = todo.id;
                  console.log(dis);
                  toDos = toDos.filter((todo) => todo.id !== dis);
                  console.log(toDos);
                  saveToDos();
                }}
                className="deleteBtn"
                key={todo.id}
              >
                ✔
              </button>
*/
