import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./index.scss";
import PracticeBtn from "../PracticeBtn/PracticeBtn";

const TodoList = () => {
  let [toDo, setToDo] = useState("");
  let [toDos, setToDos] = useState([]);

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
    const id = parseInt(event.target.id);
    toDos = toDos.filter((toDos) => toDos.id !== id);
    setToDos(toDos);
  };

  // Check off a toDo
  const checked = (e) => {
    const id = parseInt(e.target.id);
    const saved = localStorage.getItem("todos");
    const parsed = JSON.parse(saved);
    const obj = parsed.filter((parsed) => parsed.id === id);
    const isChecked = obj[0].check;

    const checked = e.target.checked;
    const textt = e.target.parentElement.parentElement.style;
    checked
      ? (textt.textDecoration = "line-through")
      : (textt.textDecoration = "");

    const checkedState = toDos.map((parsed) => {
      if (parsed.id === id) {
        if (!isChecked) {
          return { ...parsed, check: true };
        } else {
          return { ...parsed, check: false };
        }
      }
      return parsed;
    });

    setToDos(checkedState);
  };

  const clearAll = () => {
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
          <li
            className="todo-li"
            key={item.id}
            style={{ textDecoration: item.check && "line-through" }}
          >
            {item.text}
            <div>
              <input
                id={item.id}
                type="checkbox"
                onChange={checked}
                checked={item.check}
              />
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
