import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./index.scss";
import PracticeBtn from "../PracticeBtn/PracticeBtn";

const TodoList = () => {
  let [toDo, setToDo] = useState("");
  let [toDos, setToDos] = useState([]);
  // const [check, setChecked] = useState(false);

  // Load toDos
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved !== null) {
      const parsed = JSON.parse(saved);
      setToDos(parsed);
    }
  }, []);

  // Save toDos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  }, [toDos]);

  // Set toDo
  const onChange = (event) => {
    setToDo(event.target.value);
  };

  // Set toDos
  const onSubmit = (event) => {
    event.preventDefault();

    const onlySpaces = (str) => {
      // console.log(str.trim().length === 0);
      return str.trim().length === 0;
    };
    if (toDo === "" || onlySpaces(toDo)) {
      return;
    }

    setToDos((currentArray) => [
      ...currentArray,
      {
        text: toDo,
        id: Date.now(),
        check: false,
      },
    ]);
    setToDo("");
  };

  // Delete a toDo
  const deleteToDos = (event) => {
    event.preventDefault();
    const li = event.target.parentElement.parentElement;
    li.remove();
    const number = parseInt(event.target.id);
    toDos = toDos.filter((toDos) => toDos.id !== number);
    localStorage.setItem("todos", JSON.stringify(toDos));
  };

  // Check off a toDo
  const checked = (e) => {
    const checked = e.target.checked;
    // setChecked(checked);
    const textt = e.target.parentElement.parentElement.style;
    checked
      ? (textt.textDecoration = "line-through")
      : (textt.textDecoration = "");
  };

  const clearAll = () => {
    toDos = toDos.filter((toDos) => toDos.id === "banana");
    localStorage.setItem("todos", null);
    setToDos([]);
  };
  return (
    <div className="todo-div-outer">
      <h1>Today's Goals</h1>
      <form className="todo-form" onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Type here and press enter"
        />
        <button>
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </form>
      <ul className="toodoo">
        {toDos.map((item) => (
          <li className="todo-li" key={item.id}>
            {item.text}
            <div>
              <input type="checkbox" onClick={checked} />
              <button id={item.id} className="deleteBtn" onClick={deleteToDos}>
                💩
              </button>
            </div>
          </li>
        ))}
      </ul>
      {toDos.length > 1 ? (
        <PracticeBtn clearAll={clearAll} text="Clear All" />
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoList;
