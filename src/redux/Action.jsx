export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: text,
});

export const deleteTodo = (index) => ({
  type: "DELETE_TODO",
  payload: index,
});

export const editTodo = (index, newText) => ({
  type: "EDIT_TODO",
  payload: { index, newText },
});
