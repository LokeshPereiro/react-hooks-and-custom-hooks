## useReducer

Una alternativa a useState. Acepta un reducer de tipo (state, action) => newState y devuelve el estado actual emparejado con un método dispatch.

```bash
 const [state, dispatch] = useReducer(reducer, initialArg, init);
```

## (reducer, initialArg, init)

- reducer: nuestra función ejecutora de las acciones, es decir, dispatch de las acciones (payloads)
- initialArg: initialState
- init: funcion inicializadora, se usa cuando hay alguna acción muy pesada que necesita ser ejecutada previamente y/o cosume un poco más de tiempre para que sea prcesada. Ex. authenticacion, peticiones previas

## Pros and Cons

- Contamos con un reducer global o state global donde acudir para realizar las distintas tareas
- No obstante, toda nuestra lógica se centra en un único componente... Podríamos usarlo a través de custom hook en otros componentes pero no es lo ideal ya que se duplicaría el reducer ('se intancancia').
- Para que el estado sea compartido en distintos componentes, existe el useContext()

## TodoApp Screenshot
