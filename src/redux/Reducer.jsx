

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
        todos: state.todos.filter((_, idx) => idx !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
