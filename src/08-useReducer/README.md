## useReducer

Una alternativa a useState. Se trata de una función corriente que recibe dos argumentos:

- Un estado inicial de nuestra app: initialState
- Una acción a realizar: Action

Además, se trata de una función asíncrona y pura ya que toda la acción a realizar se debe de resolverse de manera interna. Siempre tiene que de devollver un nuevo estado, es decir, los cambios que sufre el estado inicial hasta el momento.

```bash
 const [state, dispatch] = useReducer(reducer, initialState, init);
```

## (reducer, initialState, init)

- reducer: nuestra función ejecutora de las acciones, es decir, dispatch de las acciones (payloads)
- initialArg: initialState
- init: funcion inicializadora, se usa cuando hay alguna acción muy pesada que necesita ser ejecutada previamente y/o cosume un poco más de tiempo para que sea procesada. Ex. authenticación, peticiones previas

## Pros and Cons

- Contamos con un reducer global o state global donde acudir para realizar las distintas tareas
- No obstante, toda nuestra lógica se centra en un único componente... Podríamos usarlo a través de custom hook en otros componentes pero no es lo ideal ya que se duplicaría el reducer ('se intancancia').
- Para que el estado sea compartido en distintos componentes, existe el useContext();

## TodoApp Screenshot

![TodoApp Screenshot](https://github.com/LokeshPereiro/react-hooks-and-custom-hooks/blob/main/src/wireframe/useReducer-TODO-app.png?raw=true)
