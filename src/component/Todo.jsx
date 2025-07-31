import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../redux/Action";
import styles from "./Todo.module.css";

const Todo = () => {
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddOrEdit = () => {
    if (text.trim() === "") return;

    if (editIndex !== null) {
      dispatch(editTodo(editIndex, text));
      setEditIndex(null);
    } else {
      dispatch(addTodo(text));
    }
    setText("");
  };

  const handleEdit = (index) => {
    setText(todos[index].text);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Redux Todo App</h1>

      <div className={styles.inputGroup}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task"
          className={styles.input}
        />
        <button onClick={handleAddOrEdit} className={styles.button}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search tasks"
        className={styles.searchInput}
      />

      <ul className={styles.todoList}>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo, index) => (
            <li key={index} className={styles.todoItem}>
              {todo.text}
              <div>
                <button onClick={() => handleEdit(index)} className={styles.editBtn}>
                  Edit
                </button>
                <button onClick={() => handleDelete(index)} className={styles.deleteBtn}>
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className={styles.noTask}>No matching tasks found.</li>
        )}
      </ul>
    </div>
  );
};

export default Todo;

