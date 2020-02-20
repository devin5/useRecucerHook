export const initialState = {
  todos: [
    {
      task: "complete homework",
      completed: false,
      id: 345456
    },
    {
      task: "do Dishes",
      completed: true,
      id: 345424
    }
  ]
};

export function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "FILTER_TODO":
      return {
        ...state,
        todos: state.todos.filter(i => !i.completed)
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            task: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };
    case "TOGGLE_TODO":
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.map(i => {
          if (i.id === action.payload) {
            return {
              task: i.task,
              completed: !i.completed,
              id: i.id
            };
          } else {
            return i;
          }
        })
      };
    default:
      return state;
  }
}
