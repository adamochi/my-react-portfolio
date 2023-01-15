/* eslint-disable jsx-a11y/no-autofocus */
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import './index.scss';
import PracticeBtn from '../PracticeBtn/PracticeBtn';

function TodoList() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  // Load toDos
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved !== null) {
      const parsed = JSON.parse(saved);
      setToDos(parsed);
    }
  }, []);

  // Save toDos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(toDos));
  }, [toDos]);

  // Set toDo
  const onChange = (event) => {
    setToDo(event.target.value);
  };

  // Set toDos
  const onSubmit = (event) => {
    event.preventDefault();
    const onlySpaces = (str) => str.trim().length === 0;
    if (toDo === '' || onlySpaces(toDo)) {
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
    setToDo('');
  };

  // Delete a toDo
  const deleteToDos = (event) => {
    event.preventDefault();
    const id = parseInt(event.target.id, 10);
    const remainingToDos = toDos.filter((toDelete) => toDelete.id !== id);
    setToDos(remainingToDos);
  };

  // Check off a toDo
  const checkFunction = (e) => {
    const id = parseInt(e.target.id, 10);
    const saved = localStorage.getItem('todos');
    const parsed = JSON.parse(saved);
    const obj = parsed.filter((parsedTodo) => parsedTodo.id === id);
    const isChecked = obj[0].check;

    const { checked } = e.target;
    const { style } = e.target.parentElement.parentElement;
    if (checked) {
      style.textDecoration = 'line-through';
    } else {
      style.textDecoration = '';
    }

    const checkedState = toDos.map((item) => {
      if (item.id === id) {
        if (!isChecked) {
          return { ...item, check: true };
        }
        return { ...item, check: false };
      }
      return item;
    });
    setToDos(checkedState);
  };

  const clearAll = () => {
    localStorage.setItem('todos', null);
    setToDos([]);
  };

  return (
    <div className="todo-div-outer">
      <h1>Today&apos;s Goals</h1>
      <form className="todo-form" onSubmit={onSubmit}>
        <input
          autoFocus
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Type here and press enter"
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </form>
      <ul className="toodoo">
        {toDos.map((item) => (
          <li
            className="todo-li"
            key={item.id}
            style={{ textDecoration: item.check && 'line-through' }}
          >
            {item.text}
            <div>
              <input
                id={item.id}
                type="checkbox"
                onChange={checkFunction}
                checked={item.check}
              />
              <button type="button" id={item.id} className="deleteBtn" onClick={deleteToDos}>
                💩
              </button>
            </div>
          </li>
        ))}
      </ul>
      {toDos.length > 1 ? (
        <PracticeBtn clearAll={clearAll} text="Clear All" />
      ) : (
        ''
      )}
    </div>
  );
}

export default TodoList;
