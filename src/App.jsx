import React from "react";
import { Provider } from "react-redux";
import store from "./redux/Store";
import Todo from "./component/Todo";

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;

