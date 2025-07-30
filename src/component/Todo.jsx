import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../redux/Action";

const Todo = () => {
  const [text, setText] = useState("");
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

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>Redux Todo App</h1>
      <div style={styles.inputGroup}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task"
          style={styles.input}
        />
        <button onClick={handleAddOrEdit} style={styles.button}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul style={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.todoItem}>
            {todo.text}
            <div>
              <button onClick={() => handleEdit(index)} style={styles.editBtn}>
                Edit
              </button>
              <button onClick={() => handleDelete(index)} style={styles.deleteBtn}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "40px",
    maxWidth: "600px",
    margin: "auto",
    backgroundColor: "#f0f4f8",
    borderRadius: "10px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  inputGroup: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "6px 0 0 6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007acc",
    color: "#fff",
    border: "none",
    borderRadius: "0 6px 6px 0",
    cursor: "pointer",
  },
  todoList: {
    listStyle: "none",
    padding: 0,
  },
  todoItem: {
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    borderRadius: "6px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editBtn: {
    marginRight: "10px",
    padding: "6px 10px",
    backgroundColor: "#ffa500",
    border: "none",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "6px 10px",
    backgroundColor: "#e63946",
    border: "none",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Todo;
