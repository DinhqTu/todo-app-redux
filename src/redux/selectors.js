import { createSelector } from "reselect";

export const selectTodoList = (state) => state.todoList;
export const selectFilterSearch = (state) => state.filters.search;
export const selectFilterStatus = (state) => state.filters.status;
export const selectFilterPriority = (state) => state.filters.priority;

export const selectReamingTodoList = createSelector(
  selectTodoList,
  selectFilterSearch,
  selectFilterStatus,
  selectFilterPriority,
  (todoList, searchFilter, statusFilter, priorityFilter) => {
    return todoList.filter((todo) => {
      console.log(todo);
      if (statusFilter === "All") {
        return priorityFilter.length
          ? todo.name.includes(searchFilter) &&
              todo.priority.includes(priorityFilter)
          : todo.name.includes(searchFilter);
      }
      return todo.name.includes(searchFilter) && statusFilter === "Completed"
        ? todo.completed
        : !todo.completed;
    });
  }
);
