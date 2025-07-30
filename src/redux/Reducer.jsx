/* eslint-disable no-case-declarations */




const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { text: action.payload }],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload),
      };
    case "EDIT_TODO":
      const updatedTodos = [...state.todos];
      updatedTodos[action.payload.index].text = action.payload.newText;
      return {
        ...state,
        todos: updatedTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;

