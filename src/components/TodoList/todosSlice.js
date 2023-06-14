const initState = [
  { id: 1, name: "Learn React", completed: true, priority: "Medium" },
  { id: 2, name: "Learn Yoga", completed: false, priority: "Low" },
  { id: 3, name: "Learn Yoga2", completed: true, priority: "Low" },
  { id: 4, name: "Learn Redux", completed: false, priority: "High" },
];

const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todosReducer;
