const initialState = [
  {
    id: 1,
    todo: "Repasar React",
    done: false,
  },
];

// Nuestro reducer necesita un initialState y la accion a ejecutar
// action --> es lo que llega o el obj que tiene definido los type y payload
const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return state;
};

// const newTodo = {
//   id: 2,
//   todo: "Repasar React x2",
//   done: false,
// };

// Tengo mi estado inicial, quiero añadir un nuevo todo.. necesito crear una accion
const addTodoAction = {
  // Esta sería mi accion o tipo de accion que quiero realizar
  type: "[TODO] add todo",
  //   Esta sería lo que 'hay dentro de la accion', carga de la accion
  payload: {
    id: 2,
    todo: "Repasar PHP",
    done: false,
  },
};

let todos = todoReducer();
todos = todoReducer(todos, addTodoAction);

// console.log(todos);
