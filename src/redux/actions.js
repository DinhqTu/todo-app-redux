export const addTodoList = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFilter = (text) => {
  return {
    type: "filters/searchFilter",
    payload: text,
  };
};

export const statusFilter = (status) => {
  return {
    type: "filters/statusFilter",
    payload: status,
  };
};

export const prioritiesFilter = (arr) => {
  return {
    type: "filters/prioritiesFilter",
    payload: arr,
  };
};
