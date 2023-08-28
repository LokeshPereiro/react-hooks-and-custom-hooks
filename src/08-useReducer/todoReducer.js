export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[Todo] Add Todo":
      return [...initialState, action.payload];

    case "[Todo] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[Todo] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    case "ABC":
      // Si estamos pendientes de implementar algo, es preferible lazar un Error porque sino parece que todo va bien
      throw new Error("action.type = ABC no esta definida");

    default:
      return initialState;
  }
};
