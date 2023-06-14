import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "../components/TodoList/todosSlice";
import filtersReducer from "../components/Filters/filtersSlice";

const store = configureStore({
  reducer: {
    todoList: todosReducer,
    filters: filtersReducer,
  },
});

export default store;
