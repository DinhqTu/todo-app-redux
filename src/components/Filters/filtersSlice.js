const initState = {
  search: "",
  status: "All",
  priority: [],
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchFilter":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/statusFilter":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/prioritiesFilter":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;

// import { }
